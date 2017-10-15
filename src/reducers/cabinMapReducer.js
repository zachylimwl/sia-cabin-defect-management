const defaultState = {
	map: [],
	fetching: false,
	fetched: false,
	error: null,
}

export default function reducer(state=defaultState, action) {
	switch(action.type) {
		case "FETCH_MAP": 
			return {...state, fetching: true};
		case "FETCH_MAP_FAIL":
			return {...state, fetching: false, error: action.payload};
		case "FETCH_MAP_SUCESS":
			return {...state, fetched: true, map: action.payload};
		default:
			return state;
	}
}