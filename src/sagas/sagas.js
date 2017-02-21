import firebase from '../firebase/firebase'
import * as actions from '../actions/actions'
import { take, call, put } from 'redux-saga/effects';
import {hashHistory} from 'react-router';

// watcher for login requests
function* loginRequestWatcher() {
  while (true) {
    const { email, password } = yield take('START_LOGIN');
    try {
     //firebase auth
     console.log("Calling firebase with "+email)
     const user = yield call([firebase.auth(), firebase.auth().signInWithEmailAndPassword], email, password)
     console.log(user)
     hashHistory.push("/admin")
    } catch (e) {
      console.log(e); // eslint-disable-line no-console
      
    }
  }
}

function* logoutRequestWatcher() {
	while(true) {
		yield take('LOGOUT');
		try{
			console.log("Logging out of firebase");
			yield call([firebase.auth(), firebase.auth().signOut])
			  // Sign-out successful.
			hashHistory.push("/login")
		} catch (e) {
			console.log(e);
		}

	}
}

function* uploadRequestWatcher() {
  while(true) {
    const {file} = yield take('BEGIN_IMAGE_UPLOAD');
      try{
        console.log('uploading')
        console.log(file)
        var storageRef = firebase.storage().ref();
        var uploadTask = storageRef.child('images/' + file.name).put(file);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
          function(snapshot) {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
              case firebase.storage.TaskState.PAUSED: // or 'paused'
                console.log('Upload is paused');
                break;
              case firebase.storage.TaskState.RUNNING: // or 'running'
                console.log('Upload is running');
                break;
            }
          }, function(error) {
          switch (error.code) {
            case 'storage/unauthorized':
              // User doesn't have permission to access the object
              break;
            case 'storage/canceled':
              // User canceled the upload
              break;
            case 'storage/unknown':
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        }, function() {
          // Upload completed successfully, now we can get the download URL
          var downloadURL = uploadTask.snapshot.downloadURL;
          console.log("upload successfull - "+ downloadURL)
        });

      } catch (e) {
        console.log(e);
    }
  }
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
	console.log("starting root saga")
  yield [
  	logoutRequestWatcher(),
    loginRequestWatcher(),
    uploadRequestWatcher()
  ]
}