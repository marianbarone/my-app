import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBAMrKiMjrUiFXMbRl39rYw3waAmlHs_jc",
    authDomain: "coderhouse-reactecommerce.firebaseapp.com",
    projectId: "coderhouse-reactecommerce",
    storageBucket: "coderhouse-reactecommerce.appspot.com",
    messagingSenderId: "746197867782",
    appId: "1:746197867782:web:26b811af57914502aa9287"
});

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}

