import React from 'react'
import { TextField, Button } from '@material-ui/core';

const Login = props => {

return (
    <form className='form' noValidate autoComplete='off'>
            <TextField 
            id='outlined-basic' 
            label='EMAIL' 
            variant='outlined'
            value={props.formValues.email}
            onChange={props.OnInputChange}/>
            <TextField 
            id='outlined-basic' 
            label='PASSWORD' 
            variant='outlined'
            value={props.formValues.password}
            onChange={props.OnInputChange}/>
            <Button variant='contained' color='primary'>
                Login
            </Button>
    </form>
    )

}

export default Login