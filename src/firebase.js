import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC93mxWiGfL3x7jvfdenrigLOw08a5-U5I",
    authDomain: "keep-clone-39dbd.firebaseapp.com",
    databaseURL: "https://keep-clone-39dbd.firebaseio.com",
    projectId: "keep-clone-39dbd",
    storageBucket: "keep-clone-39dbd.appspot.com",
    messagingSenderId: "360044451602",
    appId: "1:360044451602:web:9a85f8a02885c7f59745cb",
    measurementId: "G-QW84G8W60P"
});

const db = firebaseApp.firestore();

export { db };