// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYe_74pwwecNa0h5-LDJvKjUgT4Lo77g4",
  authDomain: "login-website-502ca.firebaseapp.com",
  projectId: "login-website-502ca",
  storageBucket: "login-website-502ca.appspot.com",
  messagingSenderId: "629291276545",
  appId: "1:629291276545:web:3048849016320d5c7fe300"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



//* Inputs
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

//* Submit Button
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
    event.preventDefault()
    console.log(5)
})