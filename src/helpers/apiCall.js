import axios from 'axios'

const API_KEY = 'e32c126f502ee4d655bdb687ce345d43'
const url = (lat, lon, type) => `http://api.openweathermap.org/data/2.5/${type}?lat=${lat}&lon=${lon}&APPID=${API_KEY}`

export function getData(lat, lon, type) {
	
	const API_URL = url(lat, lon, type)

	return axios.get(API_URL).then(res => res.data).catch(err => {})
}

