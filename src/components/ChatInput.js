import { Button } from '@material-ui/core'
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { db } from '../firebase';
import firebase from 'firebase';

function ChatInput( {channelId,channelName}) {
    const [input , setInput] = useState('')
    console.log(channelId)
    const sendMessage = e => {
        e.preventDefault();
        if (!channelId) {
            return false;
        }
        db.collection('rooms').doc(channelId).collection('messages').add({
            message : input,
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
            user:'Ayman Smati' ,
            userImage : 'https://media-exp1.licdn.com/dms/image/C5635AQGtEOk0FW69RQ/profile-framedphoto-shrink_400_400/0/1606053788555?e=1625925600&v=beta&t=wiRXnyQSORkHlP5aBeyA70REsWxOJcy15GFNFtc3odo'

        })


    }
    return (
      <ChatInputContainer>
          <form  >
              <input value={input} onChange={(e)=> setInput(e.target.value)}  placeholder={`Message to #Room`}/>
              <Button  type='submit' onClick={sendMessage}>
                  Send 
              </Button>

          </form>
      </ChatInputContainer>
    )
}

export default ChatInput


const ChatInputContainer = styled.div `
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
    
}

`;