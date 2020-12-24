import firebase from 'firebase'

 var firebaseConfig = {
    apiKey: "AIzaSyBEsYVJLUfR4HPxjNxF8wOEkwW478OPSyA",
    authDomain: "login-a2c95.firebaseapp.com",
    projectId: "login-a2c95",
    storageBucket: "login-a2c95.appspot.com",
    messagingSenderId: "281127814724",
    appId: "1:281127814724:web:eff7abf3be5feedbcc5e11"
};
  
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
