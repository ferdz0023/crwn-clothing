import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyA4v-leSollbvRjHL2Ey66GwCMBVLY7APk",
    authDomain: "crwn-db-577d9.firebaseapp.com",
    projectId: "crwn-db-577d9",
    storageBucket: "crwn-db-577d9.appspot.com",
    messagingSenderId: "1007140329101",
    appId: "1:1007140329101:web:e878e2f3d7ebff8ecaf4c4",
    measurementId: "G-GHZXSF2NSM"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle =() => auth.signInWithPopup(provider);

  export default firebase;