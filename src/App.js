import React,{useState,useRef,useEffect} from 'react';
import './App.css';
import Login from './Components/Login';
import Dashboard from "./Components/Dashboard";
import Register from "./Components/Register"
import fire from "../src/config/fire"


export const LoginContext = React.createContext();

function App() {

  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [name, setname] = useState('');
  // const username = useRef('');
  // const password = useRef('');
  const [user, setuser] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [emailError, setemailError] = useState('')
  const [passwordError, setpasswordError] = useState('')
  const [hasAccount, sethasAccount] = useState(false)

  const clearInputs = () => {
    setemail('');
    setpassword('');

  }

  const clearErrors = () => {
    setemailError('')
    setpasswordError('')
  }

  const handleLogin = () => {
    clearErrors();
    fire.
      auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setemailError(err.message);
            break;
          case "auth/wrong-password":
            setpasswordError(err.message);
            break;
          }
      })
  }

  const handleSignup = () => {
    clearErrors();
    fire.
      auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setemailError(err.message);
            break;
          case "auth/weak-password":
            setpasswordError(err.message);
            break;
        }
      });
    if(user)
    sethasAccount(!hasAccount)
   
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        clearInputs();
         setuser(user)
      } else {
        setuser("")
       }
    })
  }

  const handleLogout = () => {
    fire.auth().signOut();
    setuser('')
  }

  useEffect(() => {
    authListener();
  }, [])


console.log(" isLoggedIn", isLoggedIn  )
  if (user) {
    
    return (
      <LoginContext.Provider value={{ isLoggedIn, setisLoggedIn, name,setname,handleLogout,user,setuser }}>
        <Dashboard></Dashboard>
         </LoginContext.Provider>
      
    )

  } else {
    return (
      <LoginContext.Provider value={{
        isLoggedIn, setisLoggedIn,
        user,setuser,
        name,setname,
        email,setemail,
        password, setpassword,
        handleLogin,
        handleSignup,
        handleLogout,
        hasAccount, sethasAccount,
        emailError,
        passwordError
        
      }}>
      
   
        <div className="container">
          <div className="left"></div>
          <div className="right">
            {
              hasAccount? <Login/>: <Register/>
            }
          </div>
        </div>)
      </LoginContext.Provider>
    )
  }
}

export default App;
