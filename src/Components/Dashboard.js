import React,{useContext} from 'react'
import Logout from "../Components/Logout";
import { LoginContext } from "../App"



function Dashboard() {
    const { name } = useContext(LoginContext);
    return (
        <>
            <h1> Dashboard</h1>
            <h3> Welcome { name }</h3>
            <Logout/>
        </>
    )
}

export default Dashboard
