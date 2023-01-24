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

export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth){
        return; 
    }

    const userRef = firestore.doc(`user/${userAuth.uid}`); 
    const snapShot = await userRef.get(); 
    if(!snapShot.exists){
        const {displayName, email} = userAuth; 
        const createdAt = new Date(); 
        try{
            await userRef.set({
                displayName,
                email, 
                createdAt, 
                ...additionalData
            })
        } catch(error){
            console.log('error in creating user ', error.message); 
        }
    }
    console.log(snapShot); 
    return userRef; 
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'consent' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 