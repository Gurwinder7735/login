import React, { useContext } from 'react'
import {LoginContext} from '../App'
import LoginGoogle from './LoginGoogle';
import LoginFacebook from './LoginFacebook'



export default function Login() {
    const { isRegistered, setisRegistered,
        email, setemail,
        password, setpassword,
        handleLogin,
        handleSignup,
        hasAccount, sethasAccount,
        emailError,
        passwordError } = useContext(LoginContext)
    return (
        <div id="loginContainer">
                <div id="inputContainer">
                    <div id="loginForm">
                    
                        <h2>Login to your account</h2>
                        <div>
                            <label for="inputUsername">Username:</label>
                        <input type="text" name="inputUsername" id="inputUsername" onChange={(e) => setemail(e.target.value)} placeholder="Your Username" autoFocus required></input>
                        <p className="error">{emailError}</p>
                        </div>
                    
                        <div>
                            <label for="inputPassword">Password:</label>
                        <input type="password" name="inputPassword" id="inputPassword" placeholder="Your password" onChange={(e) => { setpassword(e.target.value) }} required></input>
                        <p className="error">{ passwordError }</p>
                        </div>
                    <button type="submit" name="loginButton" id="loginButton" onClick={()=> handleLogin()}>Login</button>
                    
                             <LoginFacebook />
                             <LoginGoogle/>

                    <p className="newUser">New user <button onClick={()=> sethasAccount(!hasAccount)}>Register</button> here</p>
              
                    </div>

                </div>
                    
        </div>
      
    )
}
