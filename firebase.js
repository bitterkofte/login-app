// Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
// import { getAnalytics } from "firebase/analytics";

import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJr5RK42A93yAgh0CRjEbEEC31UOdYaS0",
  authDomain: "user-authentication-3d8e3.firebaseapp.com",
  projectId: "user-authentication-3d8e3",
  storageBucket: "user-authentication-3d8e3.appspot.com",
  messagingSenderId: "310202489173",
  appId: "1:310202489173:web:5100d9d2299501c8b537dc",
  measurementId: "G-FJC8LC5P46"
};

// Initialize Firebase
let app;
if (firebase.apps. length === 0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app()
}

const auth = firebase.auth();

export { auth };
// const analytics = getAnalytics(app);