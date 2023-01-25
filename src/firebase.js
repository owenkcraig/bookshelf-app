// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3FCB2EtO_KSu5a4dFP-EriiHXdbWQfHg",
  authDomain: "bookshelf-demo-e0aab.firebaseapp.com",
  projectId: "bookshelf-demo-e0aab",
  storageBucket: "bookshelf-demo-e0aab.appspot.com",
  messagingSenderId: "392877814639",
  appId: "1:392877814639:web:ce4a4dd2daddfc06d4ae9a"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;