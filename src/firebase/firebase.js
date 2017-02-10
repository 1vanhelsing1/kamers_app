//set up firebase
import firebase from 'firebase'

//configure firebase
try {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDxXFbUu6yXcmFcN0tIXQpEYhd_cN9p1CA",
    authDomain: "kamers-4801c.firebaseapp.com",
    databaseURL: "https://kamers-4801c.firebaseio.com",
    storageBucket: "kamers-4801c.appspot.com",
    messagingSenderId: "939164927808"
  };
  firebase.initializeApp(config);
} catch (e) {
  console.log(e)
}

//get root ref
export var firebaseRef = firebase.database().ref();
export var storageRef = firebase.storage().ref();
//auth providers

export default firebase;