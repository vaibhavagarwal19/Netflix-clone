import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBnTN9oPnHcZT0Ci3P8UgB7g0SX3GdCBzo",
    authDomain: "netflix-clone-5be65.firebaseapp.com",
    projectId: "netflix-clone-5be65",
    storageBucket: "netflix-clone-5be65.appspot.com",
    messagingSenderId: "746411493476",
    appId: "1:746411493476:web:9ef082cd490b08b507f771",
    measurementId: "G-NJ8GSZCRCE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export {auth ,db} 
