import firebase from'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyA_-y6_dLcQjzTuYcNV8hkofi3jYyoSGEU",
    authDomain: "firegram-780bb.firebaseapp.com",
    databaseURL: "https://firegram-780bb.firebaseio.com",
    projectId: "firegram-780bb",
    storageBucket: "firegram-780bb.appspot.com",
    messagingSenderId: "1033711178699",
    appId: "1:1033711178699:web:99edac5a6fc86cb1eb1c4e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const Storage=firebase.storage();
  const Firestore=firebase.firestore();
  const TimeStamp=firebase.firestore.FieldValue.serverTimestamp;

  export {Storage,Firestore,TimeStamp};