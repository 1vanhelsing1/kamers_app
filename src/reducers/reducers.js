export var makersReducer = (state = [], action) => {
	switch (action.type) {
	   	case 'ADD_MAKER':
	      return state
       	default:
          return state
	}
}

export var authReducer = (state = {}, action) => {
	switch(action.type) {
		case 'START_LOGIN':
			return state;
		default:
			return state;
	};
}

export var uploadReducer = (state = {}, action) => {
	switch(action.type) {
		case 'BEGIN_IMAGE_UPLOAD':
		 return state;
		default:
			return state;
	};
}