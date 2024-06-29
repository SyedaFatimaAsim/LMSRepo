// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAJ8OWkHRYcqvh7n7l_Av7GsGFMlw1X2Y",
  authDomain: "lmsproject2.firebaseapp.com",
  projectId: "lmsproject2",
  databaseURL:"https://lmsproject2-default-rtdb.firebaseio.com/",
  storageBucket: "lmsproject2.appspot.com",
  messagingSenderId: "136314224378",
  appId: "1:136314224378:web:ba3e2089bbd2453c425343",
  measurementId: "G-NY7PDZ6WFN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;