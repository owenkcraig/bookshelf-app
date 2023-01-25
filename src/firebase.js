// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_GUtIO2Umw-zshBs2PeLm3Y56HGWAGdc",
  authDomain: "fir-finished.firebaseapp.com",
  projectId: "fir-finished",
  storageBucket: "fir-finished.appspot.com",
  messagingSenderId: "296142398387",
  appId: "1:296142398387:web:cdb5b0dda48276c27da1c6"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;