import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCity } from '../../state/actions/city'
import { isEmptyObj } from '../../helpers/units'
import { DayTab } from './DayTab'

const arr = [1, 2, 3, 4, 5]

class Forecast extends Component {

  render(){

    const { forecast, city } = this.props

    const slice = !isEmptyObj(forecast) ? forecast.list.slice(0, 5) : null

    return(
      <div className='widget widget__forecast'>
        <button className='city'>
          { city }
        </button>
        <div className='days'>
          { slice ? slice.map((x, idx) => <DayTab data={x} key={idx} />) : null }
        </div>
      </div>
    )
  }
}

const stateToProps = ({ state: { forecast, city } }) => ({ forecast, city })

export default connect(stateToProps, { setCity })(Forecast)