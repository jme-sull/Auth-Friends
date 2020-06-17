import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import { Button } from '@material-ui/core'
import { axiosWithAuth } from './utils/axiosAuth'

import Login from './componets/Login'
import FriendsList from './componets/FriendsList'
import PrivateRoute from './componets/PrivateRoute'

const initalFriend = [

{
  name: '',
  age: '',
  email: ''
}

]

  function App() {

    const [ friends, setFriends ] = useState(initalFriend)


    useEffect(() => {
      axiosWithAuth()
      .get('/api/friends')
      .then(res => 
        setFriends(res.data))
      .catch(err => console.log(err))}, [])
    


      return (
        <div>
          <ul>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/protected'>Protected Page</Link>
            </li>
          </ul>
      <Switch>
          <PrivateRoute exact path ='/protected' component={FriendsList}/>
                {
                  friends.map(friend => {
                  return <FriendsList key={friend.id} friend={friend} />
                })
                } 
            <PrivateRoute />

          <Route path='/login' component={Login}/>
                <Login />
            <Route />
    </Switch>
      </div>
      )
    }

export default App;
