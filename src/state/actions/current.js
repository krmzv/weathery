import { SET_CURRENT_WEATHER } from '../reducers/current'

export const setCurrentWeather = (data) => ({ type: SET_CURRENT_WEATHER, current: data})