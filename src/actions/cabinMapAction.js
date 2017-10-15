const HEADER = {
	'Content-Type': 'application/json',
	'x-api-key': 'du1yO8KLZm9PfFeg6OHQW8CFcpK1RMym3JXp78Uk',
}

export function fetchCabinMap() {
	return function(dispatch) {
		fetch('https://apidev.singaporeair.com/appchallenge/seat/getmap', {
			method: 'POST',
			headers: HEADER,
			body: {
				"request": {
					"pnr":"RVA7GY",
					"flightID": "1",
	    			"airlineCode": "SQ",
		   			"flightNumber": "366",
    				"origin": "SIN",
   					"destination": "FCO",
    				"departureDate": "2017-11-01T00:00",
		    		"cabinClass": "Y",
    				"pointOfSales": "SIN"
  				},
  				"clientUUID": "1q2w3e4r5t6y7u8i9o0p"
			}
		})
		.then(response => response.json())
		.then(json => {
			dispatch({type: 'FETCH_MAP_SUCESS', payload: json})			
		})
		.catch(err => {
			dispatch({type: 'FETCH_MAP_FAIL', payload: err})
		}
	)};
}