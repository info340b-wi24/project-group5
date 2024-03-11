import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import sample_activities from './data/activities.json';
import subcat from './data/subcat.json';
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADAg-Qj34jTiLLsFO7yMteUezVJEhBBbs",
  authDomain: "seattlehangoutguide.firebaseapp.com",
  projectId: "seattlehangoutguide",
  storageBucket: "seattlehangoutguide.appspot.com",
  messagingSenderId: "659671280063",
  appId: "1:659671280063:web:ca06443541dc3b1e83990a"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();


export{app,db}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App activities={sample_activities} tags = {subcat}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
