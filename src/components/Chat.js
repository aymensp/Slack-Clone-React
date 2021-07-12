import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../features/appSlice';
import ChatInput from './ChatInput';
import { useCollection, useDocument } from "react-firebase-hooks/firestore"
import { db } from '../firebase';
import Message from './Message';
function Chat() {

    const chatRef = useRef(null);
    const roomId = useSelector(selectRoomId);
    const [roomDetails] = useDocument(
        roomId && db.collection('rooms').doc(roomId)
    )
    const [roomMessages,loading] = useCollection(
        roomId &&
        db.collection('rooms').doc(roomId)
            .collection("messages")
            .orderBy('timestamp', 'asc')
    )
useEffect(() => {
  chatRef?.current?.scrollIntoView({
      behavior : "smooth",
  });
}, [roomId,loading])
    return (
        <ChatContainer>
            {roomDetails && roomMessages && (
     <>
     <Header>
         <HeaderLeft>
             <h4>
                 <strong># {roomDetails?.data().name}</strong>
             </h4>

         </HeaderLeft>
         <HeaderRight>
             <p>
                 <InfoOutlinedIcon /> Details
             </p>
         </HeaderRight>

     </Header>
     <ChatMessages>
         {roomMessages?.docs.map((doc) => {
             const { message, timestamp, user, userImage } = doc.data();
             return (<Message
                 key={doc.id}
                 message={message}
                 timestamp={timestamp}
                 user={user}
                 userImage={userImage}
             />)
         })}
      
      <ChatBottom ref={chatRef}/>
     </ChatMessages>
     <ChatInput
     chatRef={chatRef}
         channelName={roomDetails?.data().name}
         channelId={roomId}

     />
 </>
 
            ) }

        </ChatContainer>

    )
}

export default Chat

const ChatBottom = styled.div`
padding-bottom: 200px;

`;
const ChatContainer = styled.div`
flex: 0.7;
flex-grow: 1;
overflow-y: scroll;
margin-top: 40px;
`;
const Header = styled.div`
padding: 10px;
align-items: center;
border-bottom: 1px solid lightgray;
display: flex;
justify-content: space-between;
`;
const ChatMessages = styled.div`
`;
const HeaderRight = styled.div`

>p{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
`;
const HeaderLeft = styled.div`
> h4 {
  margin-left  : 10px;
  display: flex;
  text-transform: lowercase;
}
>h4>strong {
    font-weight: 800;
}
> h4 > .MuiSvgIcon-root{
    margin-left: 10px;
    font-size: 18px;
}
`;
