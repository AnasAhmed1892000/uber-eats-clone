// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLp2tEgryiZOUu0qO-5EtM8KvxmiIgFig",
  authDomain: "food-5ab70.firebaseapp.com",
  projectId: "food-5ab70",
  storageBucket: "food-5ab70.appspot.com",
  messagingSenderId: "174873567827",
  appId: "1:174873567827:web:c608052c7bb7cfda955ca6",
  measurementId: "G-BZBBX7C9NL",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
export { auth };
export default firebase;
