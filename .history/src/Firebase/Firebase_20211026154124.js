import firebase from "firebase./app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBAMrKiMjrUiFXMbRl39rYw3waAmlHs_jc",
  authDomain: "coderhouse-reactecommerce.firebaseapp.com",
  projectId: "coderhouse-reactecommerce",
  storageBucket: "coderhouse-reactecommerce.appspot.com",
  messagingSenderId: "746197867782",
  appId: "1:746197867782:web:26b811af57914502aa9287"
};

const app = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore(app);

