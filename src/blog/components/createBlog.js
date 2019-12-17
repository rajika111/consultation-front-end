import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { createBlog } from '../../auth/api'
import messages from '../../auth/messages'

class CreateBlog extends Component {
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

    oncreateBlog = event => {
        event.preventDefault()

        const { alert, history, setUser } = this.props

        createBlog(this.state, this.props.user)
            .then(res => {})
            .then(() => alert(messages.createBlogSuccess, 'success'))
            .then(() => history.push('/blog'))
            .catch(error => {
                console.error(error)
                this.setState({ title: '', content: '', author: '' })
                alert(messages.createBlogFailure, 'danger')
            })
    }

    render() {
        const { title, content, auther } = this.state

        return (
            <form className='auth-form' onSubmit={this.oncreateBlog}>
                <h3>Create Blog</h3>

                <label htmlFor="Title">Title</label>
                <input
                    required
                    name="title"
                    value={title}
                    type="title"
                    placeholder="Title"
                    onChange={this.handleChange}
                />
                <label htmlFor="content">Content</label>
                <input
                    required
                    name="content"
                    value={content}
                    type="content"
                    placeholder="Content"
                    onChange={this.handleChange}
                />
                <label htmlFor="auther">Author</label>
                <input
                    required
                    name="author"
                    value={auther}
                    type="auther"
                    placeholder="Author"
                    onChange={this.handleChange}
                />
                <button type="submit">ADD Blog</button>
            </form>
        )
    }
}

export default withRouter(CreateBlog);
