/**
* Description [Access Swapi endpoint for people]
* @params {}
* @return { Array } 
*/
export const swapiPeople = () => {
	const SWAPI_PEOPLE_API_ENDPOINT = `https://swapi.co/api/people`
	
	return fetch(SWAPI_PEOPLE_API_ENDPOINT)
	.then(response => {
		return response.json()
	})
	.then(json => {
		return json;
	})
}

export const swapiRequest = (string) => {
	const SWAPI_API_ENDPOINT = string
	
	return fetch(SWAPI_API_ENDPOINT)
	.then(response => {
		return response.json()
	})
	.then(json => {
		return json;
	})
}