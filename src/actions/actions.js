export var startLogin = (email, password) => {
	return {
	    type: 'START_LOGIN',
	    email: email,
	    password: password
	}
}

export var loginSuccess = (firebaseUser) => {
	return {
	    type: 'LOGIN_SUCCESS',
	    firebaseUser
	}
}

export var logout = () => {
	return {
	    type: 'LOGOUT'
	}
}

export var beginImageUpload = (file) => {
	return {
			type: 'BEGIN_IMAGE_UPLOAD',
			file: file
	}
}