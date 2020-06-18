import React from 'react'
import './FriendsList.css'


const FriendsList = props => {


    return (
    <div>
        <div>
            <h3>{props.friend.name}</h3>
            <p>{props.friend.age}</p>
            <p>{props.friend.email}</p>
        </div>

    </div>
    )


}

export default FriendsList