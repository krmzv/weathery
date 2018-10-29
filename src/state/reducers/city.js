export const SET_CITY = "SET_CITY"

const initState = [
	{
		name: "Belgrade",
		code: "bg",
		selected: true
	},
	{
		name: "Novi Sad",
		code: "ns",
		selected: false
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