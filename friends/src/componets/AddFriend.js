import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosAuth'


const AddFriend = () => {

    const [ newFriend, setNewFriend ] = useState({})


    const onInputChange = evt => {
        const name = evt.target.name
        const value = evt.target.value

        setNewFriend({
            ...newFriend,
            [name]: value 
        })
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        axiosWithAuth()
        .post('/api/friends', newFriend)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }



    return (
        <div>
            <h2>Add A Friend</h2>
            <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', width: '20rem'}}>
                <label> Name</label>
                <input
                name='name'
                value = {newFriend.name}
                onChange={onInputChange}/>
                <label>Age</label>
                <input
                name='age'
                value={newFriend.age}
                onChange={onInputChange}/>
                <label>Email</label>
                <input 
                name='email'
                value={newFriend.email}
                onChange={onInputChange}/>
            <button style={{margin: '1%', width: '10rem'}}>Submit</button>
            </form>
        </div>
    )
}

export default AddFriend