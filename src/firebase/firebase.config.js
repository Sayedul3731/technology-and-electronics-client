// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHnYH5dYZ5AzQvZ3vRDmbKNhJrtRmTYaI",
  authDomain: "techno-and-electro-client.firebaseapp.com",
  projectId: "techno-and-electro-client",
  storageBucket: "techno-and-electro-client.appspot.com",
  messagingSenderId: "227194765009",
  appId: "1:227194765009:web:4616952c0ceeb444c88ff0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;