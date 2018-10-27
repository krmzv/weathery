import React, { Component } from "react";
import { connect } from 'react-redux'
import Today from './components/Today'
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
    const city = cities.find(c => c.code === this.state.cityCode)
    console.log(city.lat, city.lon)
    getData(city.lat, city.lon, 'weather').then(x =>this.props.setCurrentWeather(x))
    getData(city.lat, city.lon, 'forecast').then(x => this.props.setForecast(x))
  }
  
  componentDidUpdate(prevProps, prevState){ 
    if(this.state.cityCode !== prevState.cityCode){

    }
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