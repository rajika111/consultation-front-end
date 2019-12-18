import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { changeBlog } from '../api'
import messages from '../messages'

class ChangeBlog extends Component {
    constructor() {
        super()

        this.state = {
            title: '',
            content: '',
            author: ''
        }
    }

    handleChange = event => this.setState({
        [event.target.name]: event.target.value
    })

    onChangeBlog = event => {
        event.preventDefault()

        const { alert, history, user } = this.props

        changeBlog(this.state, user)
            .then(() => alert(messages.changeBlogSuccess, 'success'))
            .then(() => history.push('/'))
            .catch(error => {
                console.error(error)
                this.setState({ oldBlog: '', newBlog: '' })
                alert(messages.changeBlogFailure, 'danger')
            })
    }

    render() {
        const { oldBlog, newBlog } = this.state

        return (
            <form className='auth-form' onSubmit={this.onChangeBlog}>
                <h3>Change Blog</h3>

                <label htmlFor="oldpw">Old Blog</label>
                <input
                    required
                    name="oldBlog"
                    value={oldBlog}
                    type="plog"
                    placeholder="Old Blog"
                    onChange={this.handleChange}
                />
                <label htmlFor="newBlog">New Blog</label>
                <input
                    required
                    name="newBlog"
                    value={newBlog}
                    type="plog"
                    placeholder="New Blog"
                    onChange={this.handleChange}
                />
                <button type="submit">Change Blog</button>
            </form>
        )
    }
}

export default withRouter(ChangeBlog)
