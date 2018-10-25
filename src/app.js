import React, { Component } from "react";
import { connect } from 'react-redux'
import { Today } from './components/Today'
import Forecast from './components/Forecast'
import { getData } from './helpers/apiCall'
import { cities } from './helpers/cities'
import { setCurrentWeather } from './state/actions/current'
import { setForecast } from './state/actions/forecast'

class App extends Component {

  state = {
    cityCode: 'bg'
  }

  componentDidMount(){
    // let lat = cities.find(x => x.code === this.state.cityCode ? x.code.lat)
    // getData(cities.bg.lat, cities.bg.lon, 'weather').then(x => setCurrentWeather(x))
    // getData()

  }

  render(){
    return(
    <div className="container">
      <div className='widget__container'>
        <Today/>
        <Forecast/>
      </div>
    </div>
    )
  }
}

export default connect(null, { setCurrentWeather, setForecast })(App)