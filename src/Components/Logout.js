import React,{useContext} from 'react'
import { LoginContext } from '../App';

function Logout() {

    const { isLoggedIn, setisLoggedIn, handleLogout,setuser } = useContext(LoginContext);
    console.log(useContext(LoginContext));
    
    return (
        <button onClick={()=> handleLogout()}>Logout</button>
    )
}

export default Logout;
