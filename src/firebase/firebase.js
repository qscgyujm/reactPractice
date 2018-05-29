import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDqzC-mRsRROWfcxNk0ycGw-W4KtP6ELZg",
  authDomain: "vuefirebase-d89d4.firebaseapp.com",
  databaseURL: "https://vuefirebase-d89d4.firebaseio.com",
  projectId: "vuefirebase-d89d4",
  storageBucket: "vuefirebase-d89d4.appspot.com",
  messagingSenderId: "823315955484"
};
firebase.initializeApp(config);

export default firebase;