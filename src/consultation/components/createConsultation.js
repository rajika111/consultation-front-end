import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { createConsultation } from '../../auth/api'
import messages from '../../auth/messages'

class CreateConsultation extends Component {
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

    oncreateConsultation = event => {
        event.preventDefault()

        const { alert, history, setUser } = this.props

        createConsultation(this.state, this.props.user)
            .then(res => {})
            .then(() => alert(messages.createConsultationSuccess, 'success'))
            .then(() => history.push('/consultation'))
            .catch(error => {
                console.error(error)
                this.setState({ title: '', content: '', author: '' })
                alert(messages.createConsultationFailure, 'danger')
            })
    }

    render() {
        const { title, content, auther } = this.state

        return (
            <form className='auth-form' onSubmit={this.oncreateConsultation}>
                <h2>Create Consultation</h2>

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
                <label htmlFor="author">Author</label>
                <input
                    required
                    name="author"
                    value={auther}
                    type="author"
                    placeholder="Author"
                    onChange={this.handleChange}
                />
                <button type="submit">ADD Consultation</button>
            </form>
        )
    }
}

export default withRouter(CreateConsultation);
