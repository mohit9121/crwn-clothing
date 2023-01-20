import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const config = {
    apiKey: "AIzaSyCcsHq6DXvJ1FH7BFRt6O4MLXGvATizJBs",
    authDomain: "crwn-dbpr.firebaseapp.com",
    projectId: "crwn-dbpr",
    storageBucket: "crwn-dbpr.appspot.com",
    messagingSenderId: "1047678026914",
    appId: "1:1047678026914:web:d12c9ec946dffc94bf83fb",
    measurementId: "G-K0ZPK1SGDL"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'consent' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 