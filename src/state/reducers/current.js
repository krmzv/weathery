export const SET_CURRENT_WEATHER = "SET_CURRENT_WEATHER"


export function current(state = {}, action){
	switch(action.type){
		case SET_CURRENT_WEATHER:
			return action.current
		default:
			return state
	}
}