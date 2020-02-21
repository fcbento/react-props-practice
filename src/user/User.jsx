import React, { Component } from 'react'
import Grid from '../template/Grid'
import Input from '../form/Input'
import Button from '../form/Button'
import Form from '../form/Form'

export default class User extends Component {
    
    constructor(props) {
        super(props)
        this.state = { name: '', lastName: '', document: ''}
    }

    handleAddUser = () => {
        console.log(this.state)
    }


    handleChange = (e) => {
        const value = e.target.value

        this.setState({
            ...this.state,
            [e.target.name]: value
        })
    }


    render() {
        return (
            <Grid cols="3">
                <Form 
                    name={this.state.name}
                    lastName={this.state.lastName}
                    document={this.state.document}
                    handleAddUser={this.handleAddUser}
                    handleChange={this.handleChange}
                />
            </Grid>
        )
    }
}
