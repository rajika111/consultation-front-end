import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'



const authenticatedOptions = (
  <React.Fragment>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in">Sign In</Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Link to="/">Home</Link>
    <Link to="/consultation">consultation</Link>
    <Link to="/blog">blogs</Link>
    <Link to="/TypeOfConsultation">Type Of Consultation</Link>
  </React.Fragment>
)

const Header = ({ user }) => (
  <header className="main-header">
    <h1>Legal Consultation</h1>
    <div class= "logo"></div>
    <nav>
      { user && <span>Welcome, {user.fullName}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header>
)

export default Header
