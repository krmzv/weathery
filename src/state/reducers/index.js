import { combineReducers } from "redux";
import { current } from './current'
import { forecast } from './forecast'
import { cities} from './city'

const state = combineReducers({
  current,
  forecast,
  cities
})

export default state