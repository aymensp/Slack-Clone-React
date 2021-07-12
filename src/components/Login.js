import  styled  from 'styled-components'
import React from 'react'
import { auth, provider } from '../firebase';

function Login() {
    const signIn = (e)=> {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error)=>
        alert(error.message)
        )

    };
    
    return (
      <LoginContainer>
<LoginInnerContainer>
<img src='https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg'/>
<h1>Sign in to Infodromio</h1>
<p>Papa.slack.com</p>

<button  onClick={signIn} >
    Sign in with google
</button>
</LoginInnerContainer>
      </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div `
background-color: #f8f8f8;
height: 100vh;
display: grid;
place-items : center;
`;
const LoginInnerContainer = styled.div `
padding: 100px;
text-align: center;
background-color: white;
border-radius: 10px;
box-shadow : 0 1px 3px rgba(0,0,0,0.12) , 0 1px 2px rgba(0,0,0,0.24);
>img {
    object-fit :content;
    height: 100px;
    margin-bottom: 40px ;
}
> button {
    margin-top: 50px;
    text-transform: inherit !important ;
    background-color: #0a8d48;
    color: white;
    border: none;
}
`;