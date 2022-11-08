// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwlOUcaWtLhRJoqsX8-Uo8I2KXq_MBm5c",
  authDomain: "fir-auth-react-starter-3fe91.firebaseapp.com",
  projectId: "fir-auth-react-starter-3fe91",
  storageBucket: "fir-auth-react-starter-3fe91.appspot.com",
  messagingSenderId: "794395794399",
  appId: "1:794395794399:web:44746c6b58d535330c026a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app;




