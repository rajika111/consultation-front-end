import React, { Component } from 'react'
import './App.scss'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import AlertDismissible from './auth/components/AlertDismissible'
import Blogs from './blog/components/blogs';
import Consultations from './consultation/components/consultations'
import TypeOfConsultations from './TypeOfConsultation/components/typeOfConsultations'
import Home from './home/home'

class App extends Component {
  constructor() {
    super()

    this.state = {
      user: null,
      alerts: [],
      blogs: [],
      consultations: [],
      typeOfConsultations: []
    };

  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }

  setBlogs = (blogs) => {
    this.setState({ blogs: blogs });
  }
  setConsultations = (consultations) => {
    this.setState({ consultations: consultations });
  }
  setTypeOfConsultations = (typeOfConsultations) => {
    this.setState({ typeOfConsultations: typeOfConsultations });
  }


  render() {
    const { alerts, user } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AlertDismissible key={index} variant={alert.type} message={alert.message} />
        ))}
        
        <main className="container">
          <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/blog' render={() => (
            <Blogs blogs={this.state.blogs}
              setBlogs={this.setBlogs} user={user} />
          )} />
          <Route path='/consultation' render={() => (
            <Consultations consultations={this.state.consultations}
              setConsultations={this.setConsultations} />
          )} />
          <Route path='/typeOfConsultation' render={() => (
            <TypeOfConsultations typeOfConsultations={this.state.typeOfConsultations}
            setTypeOfConsultations={this.setTypeOfConsultations} />
          )} />
          </Switch>
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
        </main>
       
      </React.Fragment>
    )
  }
}

export default App
