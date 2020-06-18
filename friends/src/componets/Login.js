import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { TextField, Button } from '@material-ui/core';
import axios from 'axios'

import { axiosWithAuth } from '../utils/axiosAuth'





const Login = props => {

    return (
    <form className='form' noValidate autoComplete='off'>
            <TextField 
            id='outlined-basic' 
            label='USERNAME' 
            variant='outlined'
            name='username'
            value={props.credentials.username}
            onChange={props.onInputChange}/>
            
            <TextField 
            id='outlined-basic' 
            label='PASSWORD' 
            variant='outlined'
            name='password'
            value={props.credentials.password}
            onChange={props.onInputChange}/>

            <Button onClick={props.login} variant='contained' color='primary'>
                Login
            </Button>
    </form>
    )

}

export default Login