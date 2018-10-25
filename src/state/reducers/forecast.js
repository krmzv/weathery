export const SET_FORECAST = "SET_FORECAST"


export function forecast(state = [], action){
	switch(action.type){
		case SET_FORECAST:
			return action.forecast
		default:
			return state
	}
}