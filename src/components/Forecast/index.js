import React, { Component } from 'react'
import { DayTab } from './DayTab'

const arr = [1, 2, 3, 4, 5]

class Forecast extends Component {
  render(){
    return(
      <div className='widget widget__forecast'>
        <div className='days'>
          { arr.map((x, idx) => <DayTab key={idx} />) }
        </div>
      </div>
    )
  }
}

export default Forecast