import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCC2qX2Mqz37QOSf49qRkV29jeIWFHBAGw",
  authDomain: "safebayproject.firebaseapp.com",
  projectId: "safebayproject",
  storageBucket: "safebayproject.appspot.com",
  messagingSenderId: "536690906214",
  appId: "1:536690906214:web:4a97bab10e3155f6a9c9a7",
  measurementId: "G-HF37CEYQVH"
};

const app = firebase.initializeApp(firebaseConfig);

export default app;
