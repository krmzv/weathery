import React from 'react'
import { connect } from 'react-redux'
import { TodayGeneral } from './General'
import { TodayDetails } from './Details'

export function Today({current}){

  console.log(current)

  return(
    <div className='container__today'>
      <TodayGeneral/>
      <TodayDetails/>
    </div>
  )
}

const stateToProps = ({state: { today }}) => ({ current: today }) 

export default connect(stateToProps, {  })(Today)