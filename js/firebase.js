import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "",

  authDomain: "meublog-ee114.firebaseapp.com",

  projectId: "meublog-ee114",

  storageBucket: "meublog-ee114.firebasestorage.app",

  messagingSenderId: "179221168100",

  appId: "1:179221168100:web:7ab056c75727d0efaf11f1"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Add data to Firestore
const addData = async () => {
    try {
      const docRef = await addDoc(collection(db, "artigos"), {
        Titulo: "Hello, World",
        nome:    "Andrey"
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
//addData();
