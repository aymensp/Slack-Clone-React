import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {
    return (
        <HeaderContainer>
            <HeaderLeft>
                <AccessTimeIcon />
            </HeaderLeft>
            <HeaderSearch>
                <SearchIcon />
                <input placeholder='search From Slack' />
            </HeaderSearch>
            <HeaderRight>
                <HelpOutlineIcon />
                <HeaderAvatar
                    variant="square"
                //TODO add onclick
                // src=''

                />

            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
 position: fixed;
 align-items: center;
 width: 100%;
 display: flex;
 justify-content: space-between;
 padding: 5px 0;
 background-color: var(--slack-color);
 color: white;
`;
const HeaderLeft = styled.div`
flex:0.2;
display: flex;
padding-right: 20px;
justify-content: flex-end;

`;
const HeaderAvatar = styled(Avatar)`
cursor: pointer;
margin-left: auto;
width: 30px !important;
height: 30px !important;
border-radius: 4px !important;
:hover {
    opacity: 0.8;   
}
`;
const HeaderRight = styled.div`
flex:0.35;
display: flex;
align-items: center;
margin-left: 20px;
margin-right: 15px;

`;
const HeaderSearch = styled.div`
padding: 0 50px;
color: gray;
border: 1px gray solid;
align-items: center;
flex: 0.45;
opacity: 1;
border-radius: 6px;
background-color: #421f44;
text-align: center;
display: flex;
> input{
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
    color:white;  
}
`;
