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

// single entry point to start all Sagas at once
export default function* rootSaga() {
	console.log("starting root saga")
  yield [
  	logoutRequestWatcher(),
    loginRequestWatcher()
  ]
}