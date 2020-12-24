import React,{useContext} from 'react'
import { FaGooglePlusSquare } from "react-icons/fa";
import { GoogleLogin } from 'react-google-login';
import { LoginContext } from '../App';



export default function LoginGoogle() {

  const { isLoggedIn,setisLoggedIn,setname,user,setuser } = useContext(LoginContext)


  const responseGoogle = (response) => {
    
    setisLoggedIn(true);
    setuser(response.profileObj.givenName)
    setname(response.profileObj.givenName);
  console.log(response);
}

    return (
        <>
            {/* <button className="btn google"><FaGooglePlusSquare className="icon"/>  Sign In with google</button> */}
           <GoogleLogin
    clientId="942126254255-tlu0e13ip3b38eq6if56dnu0nc8bqrs3.apps.googleusercontent.com"
    render={renderProps => (
      <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="btn google"><FaGooglePlusSquare className="icon"/>  Sign In with google</button>
    )}
          buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
        />

        </>
    )
}
