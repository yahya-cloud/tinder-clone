import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAdOBtsXwi33aO1LHQ7MRvYUiLcV4Wk-Vo",
    authDomain: "tinder-clone-6ccc5.firebaseapp.com",
    databaseURL: "https://tinder-clone-6ccc5-default-rtdb.firebaseio.com",
    projectId: "tinder-clone-6ccc5",
    storageBucket: "tinder-clone-6ccc5.appspot.com",
    messagingSenderId: "288050549203",
    appId: "1:288050549203:web:f142b152a119b213a95f26",
    measurementId: "G-GX2VPR8YJV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;