import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCjiuzOFXCKtVJzWA0E8zmo1bWX0yQxJEc",
    authDomain: "registertesttask.firebaseapp.com",
    databaseURL: "https://registertesttask-default-rtdb.firebaseio.com",
    projectId: "registertesttask",
    storageBucket: "registertesttask.appspot.com",
    messagingSenderId: "601364190131",
    appId: "1:601364190131:web:f181213c834325603cf1c6",
    measurementId: "G-W8JGCXZ4DK"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
