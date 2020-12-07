import FirebaseContext from './context';
import app from 'firebase/app';

const config = { 
    apiKey: "AIzaSyAv_hBupWINxil-aB2m52YLV0ZIJGJqO4I",
    authDomain: "registerreacttesttask.firebaseapp.com",
    databaseURL: "https://registerreacttesttask-default-rtdb.firebaseio.com",
    projectId: "registerreacttesttask",
    storageBucket: "registerreacttesttask.appspot.com",
    messagingSenderId: "264491691593",
    appId: "1:264491691593:web:ea2a51586b71acae041998",
    measurementId: "G-1MHYK09TFB"
  } ;

  class Firebase {
    constructor() {
      app.initializeApp(config);
    }
  }
   
  export default Firebase;
  export { FirebaseContext };