import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAV0hf8HEKeYdiiTJ2fXFFXt_yyPquT7KE",
  authDomain: "my-first-project-ecba6.firebaseapp.com",
  projectId: "my-first-project-ecba6",
  storageBucket: "my-first-project-ecba6.appspot.com",
  messagingSenderId: "179344130895",
  appId: "1:179344130895:web:57fba6297e65d59680fb3a",
};

firebase.initializeApp(firebaseConfig);
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
