import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { TextField, Button } from '@material-ui/core';
import axios from 'axios'

import { axiosWithAuth } from '../utils/axiosAuth'

const initalCredentials = {
    username: '',
    password: ''
}



const Login = props => {

    const [ credentials, setCredentials ] = useState(initalCredentials)

    const history = useHistory();


    const onInputChange = evt => {
            const name = evt.target.name
            const value = evt.target.value

            setCredentials({
                ...credentials,
                [name]: value 
            })
        }



    const login = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('api/login', credentials)
            .then(res => 
                window.localStorage.setItem('token', res.data.payload),
                history.push('/protected'))
            .catch(err => console.log(err))
           
      };



       

    return (
    <form className='form' noValidate autoComplete='off'>
            <TextField 
            id='outlined-basic' 
            label='USERNAME' 
            variant='outlined'
            name='username'
            value={credentials.username}
            onChange={onInputChange}/>
            
            <TextField 
            id='outlined-basic' 
            label='PASSWORD' 
            variant='outlined'
            name='password'
            value={credentials.password}
            onChange={onInputChange}/>

            <Button onClick={login} variant='contained' color='primary'>
                Login
            </Button>
    </form>
    )

}

export default Login