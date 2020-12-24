import React,{useContext} from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import FacebookLogin from 'react-facebook-login';
import { LoginContext } from '../App';



const LoginFacebook = () => {

    const { isLoggedIn,setisLoggedIn,setname,hasAccount,sethasAccount,user,setuser} = useContext(LoginContext)


    const responseFacebook = (response) => {
      setisLoggedIn(true);
      setuser(response.name)
      
          setname(response.name);
          console.log(response);
}

    return (      
  <FacebookLogin
    appId="182742250254730"
    autoLoad={false}
    fields="name,email,picture"
    callback={responseFacebook}
    cssClass="btn facebook"
    icon="fa-facebook"
  />
  

        
    )
}

export default LoginFacebook;
