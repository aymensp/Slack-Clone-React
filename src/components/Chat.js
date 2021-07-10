import React from 'react'
import styled from 'styled-components';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../features/appSlice';
import ChatInput from './ChatInput';
import { useCollection} from "react-firebase-hooks/firestore"
import { db } from '../firebase';
function Chat() {

    const roomId = useSelector(selectRoomId);
    const [roomDetails] = useCollection(
        roomId && db.collection('rooms').doc(roomId)
    )
    return (
    
            <ChatContainer>
                <>
                <Header>
                    <HeaderLeft>
                        <h4>
                            <strong># Room-name</strong>
                        </h4>
                        
                    </HeaderLeft>
                    <HeaderRight>
                        <p>
                            <InfoOutlinedIcon /> Details
                        </p>
                    </HeaderRight>

                </Header>
                <ChatMessages>

                </ChatMessages>
                <ChatInput
                 channelId={roomId}
                
                />

                </>
            </ChatContainer>
     
    )
}

export default Chat


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
const ChatMessages = styled.div `
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
