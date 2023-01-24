import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';

const firestore = firebase.firestore(); 

firestore.collection('users').doc('cnc5PBHFZWOwdCHJwDOh').collection('cartItem').doc('OroCCvUjFcZNeqAI4HN5'); 
// or
// firestore.doc('/user/cnc5PBHFZWOwdCHJwDOh/cartItem/OroCCvUjFcZNeqAI4HN5'); 
// firestore.collection('/user/cnc5PBHFZWOwdCHJwDOh/cartItem'); 