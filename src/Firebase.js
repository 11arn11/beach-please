import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyDCCc8szkzfCu5BrXYqKamT7kImmBPHNO0",
  authDomain: "beach-please-84972.firebaseapp.com",
  databaseURL: "https://beach-please-84972.firebaseio.com",
  projectId: "beach-please-84972",
  storageBucket: "beach-please-84972.appspot.com",
  messagingSenderId: "414605894206",
  appId: "1:414605894206:web:5f7b3ef3473d98be4ea76f",
  measurementId: "G-N456FJSC4R"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
