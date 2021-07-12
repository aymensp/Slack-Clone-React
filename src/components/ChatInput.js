import { Button } from '@material-ui/core'
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { db } from '../firebase';
import firebase from 'firebase';
import {auth} from "../firebase";
import {useAuthState} from 'react-firebase-hooks/auth'

function ChatInput({chatRef, channelId, channelName }) {
    const [user] = useAuthState(auth);

    const [input, setInput] = useState('')
    console.log(channelId)
    const sendMessage = e => {
        e.preventDefault();
        if (!channelId) {
            return false;
        }
        db.collection('rooms').doc(channelId).collection('messages').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            userImage: user.photoURL

        })
        chatRef.current.scrollIntoView({
            behavior : "smooth",
        });
     setInput('')

    }
    return (
        <ChatInputContainer>
            <form  >
                <input value={input} onChange={(e) => setInput(e.target.value)} placeholder={`Message to #/${channelName}`} />
                <button type='submit' onClick={sendMessage}>
                    Send
                </button>

            </form>
        </ChatInputContainer>
    )
}

export default ChatInput


const ChatInputContainer = styled.div`
border-radius: 20px;
> form {
    position: relative;
    display: flex;
    justify-content: center;
}
> form > input {
    position: fixed;
    bottom: 30px;
    height: 40px;
    width: 70%;
    border: 1px solid gray ;
    border-radius: 3px;
    padding: 20px;
    outline: none;
}
> form > button {
visibility:hidden;
}

`;