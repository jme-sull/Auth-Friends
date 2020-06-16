import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom';
import './App.css';
import { Button } from '@material-ui/core'

import Login from './componets/Login'


const initialFormValues = {

  email: '',
  password: ''

}

  function App() {

    const [ formValues, setFormValues ] = useState(initialFormValues)


  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value

      setFormValues({
        ...formValues,
        [name]: value 
    })
  }


      return (
        <div>
            
          <Route path='/login' component={Login}>
                <Login onInputChange={onInputChange} formValues={formValues}/>
          </Route>

      </div>
      )
    }

export default App;
