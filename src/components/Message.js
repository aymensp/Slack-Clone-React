import React from 'react'
import styled from 'styled-components'

function Message({ message, timestamp, user, userImage }) {
    return (
        <MessagContainer>
            <img src={userImage} alt='img' />
            <MessageInfo>
                <h4>
                    {user} {''}
                    <span>
                        {
                            new Date(timestamp?.toDate()).toUTCString()
                        }

                    </span>
                </h4>
                <p>{message}</p>
            </MessageInfo>
        </MessagContainer>
    )
}

export default Message

const MessagContainer = styled.div`
display: flex;
align-items: center;
padding: 20px;
>img {
    height: 50px;
   border-radius:20px ;
}
`;
const MessageInfo = styled.div`
padding-left: 10px;
>h4 > span {
    color: gray;
    font-weight: 300;
    margin-left: 4px;
    font-size: 10px;
    line-height: 1.7;
}
>p {
    line-height: 1.6;
    font-weight: 300;
}
`;
