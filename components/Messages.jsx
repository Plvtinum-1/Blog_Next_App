import React from 'react'
import { getContactMsgs } from '../services'

const Messages = () => {
    console.log(getContactMsgs)
    return (
        <div>
            <h1>Contact MSG</h1>
        </div>
    )
}

export default Messages
