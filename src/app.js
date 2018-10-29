import React, { Component } from "react";
import { connect } from 'react-redux'
import Today from './components/Today'
import Forecast from './components/Forecast'
import { getData } from './helpers/apiCall'
import { setCurrentWeather } from './state/actions/current'
import { setForecast } from './state/actions/forecast'

class App extends Component {

  state = {
    cityCode: 'bg'
  }

  componentDidMount(){
    const city = this.props.cities.find(c => c.selected)
    getData(city.lat, city.lon, 'weather').then(x =>this.props.setCurrentWeather(x))
    getData(city.lat, city.lon, 'forecast').then(x => this.props.setForecast(x))
  }
  
  componentDidUpdate(prevProps, prevState){ 
    if(prevProps.cities !== this.props.cities){
      const c = this.props.cities.find(c => c.selected)
      getData(c.lat, c.lon, 'weather').then(x =>this.props.setCurrentWeather(x))
      getData(c.lat, c.lon, 'forecast').then(x => this.props.setForecast(x))
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

const stateToProps = ({ state: { cities } }) => ({ cities })

export default connect(stateToProps, { setCurrentWeather, setForecast })(App)