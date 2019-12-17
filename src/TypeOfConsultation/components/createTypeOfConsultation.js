import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { createTypeOfConsultation } from '../../auth/api'
import messages from '../../auth/messages'

class CreateTypeOfConsultation extends Component {
    constructor() {
        super()

        this.state = {
            category: '',
            description: ''
        }
    }

    handleChange = event => this.setState({
        [event.target.name]: event.target.value
    })

    oncreateTypeOfConsultation = event => {
        event.preventDefault()

        const { alert, history, setUser } = this.props

        createTypeOfConsultation(this.state, this.props.user)
            .then(res => {})
            .then(() => alert(messages.createTypeOfConsultationSuccess, 'success'))
            .then(() => history.push('/typeOfConsultation'))
            .catch(error => {
                console.error(error)
                this.setState({ category: '', description: ''})
                alert(messages.createTypeOfConsultationFailure, 'danger')
            })
    }

    render() {
        const { category, description } = this.state

        return (
            <form className='auth-form' onSubmit={this.oncreateTypeOfConsultation}>
                <h3>create TypeOfConsultation</h3>

                <label htmlFor="Category">Category</label>
                <input
                    required
                    name="category"
                    value={category}
                    type="category"
                    placeholder="Category"
                    onChange={this.handleChange}
                />
                <label htmlFor="Description">Description</label>
                <input
                    required
                    name="description"
                    value={description}
                    type="description"
                    placeholder="Description"
                    onChange={this.handleChange}
                />
                
                <button type="submit">ADD Type Of Consultation</button>
            </form>
        )
    }
}

export default withRouter(CreateTypeOfConsultation);
