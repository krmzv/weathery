import { combineReducers } from "redux";
import { current } from './current'
import { forecast } from './forecast'
import { city } from './city'

const state = combineReducers({
  current,
  forecast,
  city
})

export default state