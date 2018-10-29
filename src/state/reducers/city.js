export const SET_CITY = "SET_CITY"

const initState = [
	{
		name: "Belgrade",
		code: "bg",
		selected: true,
		lon: 20.46513,
    lat: 44.804008
	},
	{
		name: "Novi Sad",
		code: "ns",
		selected: false,
		lon: 19.836941,
    lat: 45.251671
	}
]

export function cities(state = initState, action){
	switch(action.type){
		case SET_CITY:
			return state.map(x => x.code === action.cityCode ? Object.assign({}, x, {selected: !x.selected}) : Object.assign({}, x, { selected: false }))
		default:
			return state
	}
}