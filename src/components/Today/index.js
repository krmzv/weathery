import React from 'react'
import { TodayGeneral } from './General'
import { TodayDetails } from './Details'

export function Today(){
  return(
    <div className='container__today'>
      <TodayGeneral/>
      <TodayDetails/>
    </div>
  )
}