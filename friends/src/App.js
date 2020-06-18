import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Route, Link, Switch, useHistory } from 'react-router-dom';
import './App.css';
import { Button } from '@material-ui/core'
import { axiosWithAuth } from './utils/axiosAuth'

import Login from './componets/Login'
import FriendsList from './componets/FriendsList'
import PrivateRoute from './componets/PrivateRoute'
import AddFriend from './componets/AddFriend'

const initalFriend = [

{
  name: '',
  age: '',
  email: ''
}

]

const initalCredentials = {
  username: '',
  password: ''
}

  function App() {

    const [ friends, setFriends ] = useState(initalFriend)
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
        axiosWithAuth()
            .post('api/login', credentials)
            .then(res => 
                window.localStorage.setItem('token', res.data.payload),
                history.push('/friends'))
            .catch(err => console.log(err))
           
      };


    useEffect(() => {
      axiosWithAuth()
      .get('/api/friends')
      .then(res => 
        setFriends(res.data))
      .catch(err => console.log(err))}, [friends])
    


      return (
        <div>
          <ul>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/friends'>Friends</Link>
            </li>
            <li>
              <Link to='/add-friend'>Add Friend</Link>
            </li>
          </ul>
        <Switch>

          <PrivateRoute path='/friends' component={FriendsList}>
                {
                      friends.map(item => {
                      return <FriendsList key={item.id} friend={item} />
                    })
                } 
        </PrivateRoute>
          <Route path='/login' component={Login}>
                <Login credentials={credentials} onInputChange={onInputChange} login={login} />
          </Route>

          <Route path='/add-friend' component={AddFriend}>
            <AddFriend />
          </Route>

    </Switch>

      </div>
      )
    }

export default App;
