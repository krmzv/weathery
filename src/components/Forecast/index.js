import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCity } from '../../state/actions/city'
import { isEmptyObj } from '../../helpers/units'
import { DayTab } from './DayTab'

const arr = [1, 2, 3, 4, 5]

class Forecast extends Component {

  render(){

    const { forecast, city: { name } , otherCity } = this.props

    const slice = !isEmptyObj(forecast) ? forecast.list.slice(0, 5) : null

    return(
      <div className='widget widget__forecast'>
        <div className='city--container'>
          <button className='city'>
            { name }
          </button>
          <div className='city--menu'>
            <button onClick={() => this.props.setCity(otherCity.code)} className='menu--item'>
              { otherCity ? otherCity.name : null }
            </button>
          </div>
        </div>
        <div className='days'>
          { slice ? slice.map((x, idx) => <DayTab data={x} key={idx} />) : null }
        </div>
      </div>
    )
  }
}

const stateToProps = ({ state: { forecast, cities } }) => ({ forecast, city: cities.find(x => x.selected), otherCity: cities.find(x => !x.selected) })

export default connect(stateToProps, { setCity })(Forecast)