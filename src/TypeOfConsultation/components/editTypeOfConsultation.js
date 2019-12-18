import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { editTypeOfConsultationById } from '../api'
import messages from '../../auth/messages'
class EditTypeOfConsultation extends Component {
    constructor() {
        super()
        this.state = {
            category: '',
            description: ''
        }
    }
    componentDidMount() {
        const { info } = this.props.location.state
        console.log(this.props);

        let category = info.category
        let description = info.description

        let id = info._id
        this.setState({
            category, description, id
        })
    }
    handleChange = event => this.setState({
        [event.target.name]: event.target.value
    })
    onEditTypeOfConsultation = event => {
        event.preventDefault()
        const { alert, history, user } = this.props
        editTypeOfConsultationById(this.state, this.props.user)
            .then((response) => { })
            .then(() => alert(messages.editTypeOfConsultationSuccess, 'success'))
            .then(() => history.push('/typeOfConsultation'))
            .catch(error => {
                console.log(error)
                this.setState({
                    category: '',
                    description: '',
                })
                alert(messages.editTypeOfConsultationFailure, 'danger')
            })
    }

    render() {
        const { category, description } = this.state
        return (
            <form className='auth-form' onSubmit={this.onEditTypeOfConsultation}>
                <h3>Edit A TypeOfConsultation</h3>
                <label htmlFor="category">Category</label>
                <input
                    required
                    name="category"
                    value={category}
                    type="category"
                    placeholder="Category"
                    onChange={this.handleChange}
                />
                <label htmlFor="description">description</label>
                <input
                    required
                    name="description"
                    value={description}
                    type="description"
                    placeholder="description"
                    onChange={this.handleChange}
                />
                <button type="submit">ADD TypeOfConsultation</button>
            </form>
        )
    }
}
export default EditTypeOfConsultation;