import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

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

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export {projectStorage,projectFirestore};