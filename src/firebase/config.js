import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsV8xFnBMR00J1mkT4_Lsr-5jtnejb_iE",
  authDomain: "vue-firebase-8775b.firebaseapp.com",
  projectId: "vue-firebase-8775b",
  storageBucket: "vue-firebase-8775b.appspot.com",
  messagingSenderId: "792331402596",
  appId: "1:792331402596:web:675d40355029716cae8e71",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();

export { projectFirestore };
