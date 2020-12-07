import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCCc_lZvjksbS6RYv38PzGWu-wWvhZ-fGU",
  authDomain: "registertask-fd88e.firebaseapp.com",
  databaseURL: "https://registertesttask-default-rtdb.firebaseio.com/",
  projectId: "registertask-fd88e",
  storageBucket: "registertask-fd88e.appspot.com",
  messagingSenderId: "967638171304",
  appId: "1:967638171304:web:dced1cf743531ac9950c9d"
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
