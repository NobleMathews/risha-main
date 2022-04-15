import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBXdhOqIqu_8rliTmNvL9Vw6Qayfs66SXA",
    authDomain: "risha-lab-server.firebaseapp.com",
    databaseURL: "https://risha-lab-server.firebaseio.com",
    projectId: "risha-lab-server",
    storageBucket: "risha-lab-server.appspot.com",
    messagingSenderId: "718211991970",
    appId: "1:718211991970:web:4361659a1605810d32cafb"
};

firebase.initializeApp(firebaseConfig);

const appCheck = firebase.appCheck();
// Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// key is the counterpart to the secret key you set in the Firebase console.
appCheck.activate(
  '6Lc8kXkfAAAAABe_YlCuTQBfKfLFAyQfDC-eSHRs',

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  true);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage,projectFirestore,projectAuth,timeStamp};