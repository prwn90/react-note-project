import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const firebase = require('firebase');
require('firebase/firestore');

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMAoKSD5IG0Jj8djPUqKTd2wWmC6nG78U",
    authDomain: "note-project-b3a96.firebaseapp.com",
    databaseURL: "https://note-project-b3a96.firebaseio.com",
    projectId: "note-project-b3a96",
    storageBucket: "note-project-b3a96.appspot.com",
    messagingSenderId: "312226426655",
    appId: "1:312226426655:web:079b646eb12d98c4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('note-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
