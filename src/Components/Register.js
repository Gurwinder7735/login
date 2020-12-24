import React,{useContext} from 'react'
import { LoginContext } from '../App';

function Register() {

     const { hasAccount,sethasAccount,handleSignup, email, setemail,
        password, setpassword,emailError,passwordError} = useContext(LoginContext)

    return (
        <div id="loginContainer">
                <div id="inputContainer">
                    <form id="loginForm">
                    
                        <h2>Register Account Form</h2>
                        {/* <p>
                            <label for="inputUsername">Username:</label>
                            <input type="text" name="inputUsername" id="inputUsername" placeholder="Your Username" autoFocus required></input>
                    </p> */}
                        <p>
                            <label for="inputEmail">Email:</label>
                        <input type="text" name="inputEmail" id="inputEmail" placeholder="Your Email" onChange={(e) => setemail(e.target.value)} required></input>
                        <p className="error">{ emailError }</p>
                        </p>
                        <p>
                            <label for="inputPassword">Password:</label>
                        <input type="password" name="inputPassword" id="inputPassword" placeholder="Your password" onChange={(e) => setpassword(e.target.value)} required></input>
                        <p className="error">{ passwordError }</p>
                        </p>
                         {/* <p>
                            <label for="inputConfirmPassword">Confirm Password:</label>
                            <input type="text" name="inputConfirmPassword" id="inputConfirmPassword" placeholder="Confirm Password"required></input>
                        </p> */}
                    <button type="submit" name="loginButton" id="loginButton" onClick={()=> handleSignup()}>Sign Up</button>
                    <p className="newUser">Already Have an account <button onClick={()=> sethasAccount(!hasAccount)}>Login</button> Here</p>
              
                    </form>

                </div>
                    
        </div>
    )
}

export default Register
