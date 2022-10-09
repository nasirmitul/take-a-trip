// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIuspB8B-EV5kQ8tlnaDyuFB1eLNb6oQ4",
  authDomain: "take-a-trip-01.firebaseapp.com",
  projectId: "take-a-trip-01",
  storageBucket: "take-a-trip-01.appspot.com",
  messagingSenderId: "391470244255",
  appId: "1:391470244255:web:66b778a43b4ad8e6f8ddaa",
  measurementId: "G-R2C534L2N7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;