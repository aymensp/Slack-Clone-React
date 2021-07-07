import React from 'react';
import SendIcon from '@material-ui/icons/Send';
import styled from 'styled-components';
import {Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

function Header() {
    return (
        <HeaderContainer>
             <HeaderLeft>
                <HeaderAvatar
                    //TODO add onclick
                    // src=''
                     
                    /> 
                    <AccessTimeIcon/>
             </HeaderLeft>
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`

 display: flex;

`;
const HeaderLeft = styled.div`

`;
const HeaderAvatar = styled(Avatar)``;