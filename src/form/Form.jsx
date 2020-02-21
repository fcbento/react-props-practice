import React from 'react'
import Input from '../form/Input'
import Button from '../form/Button'
import Grid from '../template/Grid'

export default function Form(props) {
    console.log(props)
    return (
        <Grid cols="12 9 10">
            <Input labelName="Name" placeholder="Name" size="sm" inputValue={props.name} change={props.handleChange} name="name"/>
            <Input labelName="Last Name" placeholder="Last Name" size="sm" inputValue={props.lastName} change={props.handleChange} name="lastName"/>
            <Input labelName="Document" placeholder="Document" size="sm" inputValue={props.document} change={props.handleChange} name="document"/>
            <Button btnType="success" btnName="Register" btnAction={props.handleAddUser} />
        </Grid>
    )
}



