export const SET_CITY = "SET_CITY"


export function city(state = 'Belgrade', action){
	switch(action.type){
		case SET_CITY:
			return action.city
		default:
			return state
	}
}