 
import firebase from '@firebase/app';
require('firebase/auth');
 require('firebase/auth')
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAcctQ4PS8rSyZ8HEvPMOg8QNIVfrSXX-Q",
    authDomain: "bedayznuxt.firebaseapp.com",
    projectId: "bedayznuxt",
    storageBucket: "bedayznuxt.appspot.com",
    messagingSenderId: "222455709363",
    appId: "1:222455709363:web:74e76c8893c667f2fe3ac6",
    measurementId: "G-4E3LWC72GT"
  };
  // Initialize Firebase
  let app = null;
  if(!firebase.apps.length)
  {
      app = firebase.initializeApp(firebaseConfig)
  }

  export default firebase