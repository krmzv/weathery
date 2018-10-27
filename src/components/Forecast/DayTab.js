import React from 'react'
import { icons } from '../../helpers/icons'
import { rand, k2c } from '../../helpers/units'

export function DayTab({data}){
  const r = rand()
  return(
    <div className='tab'>
      <div className='tab--blur'></div>
      <div className='tab--content'>
        { icons[r].img() }
        <span style={{ fontWeight: '500' }}>{ k2c(data.main.temp) }°</span>
        <span style={{marginTop: '50px'}}>Sun</span>
      </div>
    </div>
  )
}