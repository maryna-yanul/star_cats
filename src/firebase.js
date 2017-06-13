import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

firebase.initializeApp({
  apiKey: process.env.firebaseApiKey,
  authDomain: "star-cats.firebaseapp.com",
  databaseURL: "https://star-cats.firebaseio.com",
  projectId: "star-cats",
  storageBucket: "star-cats.appspot.com",
  messagingSenderId: "655317946224"
});

export { firebase };
