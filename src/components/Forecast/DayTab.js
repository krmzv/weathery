import React from 'react'
import { icons } from '../../helpers/icons'
import { rand } from '../../helpers/units'

export function DayTab({deg, day}){
  const r = rand()
  return(
    <div className='tab'>
      <div className='tab--blur'></div>
      <div className='tab--content'>
        { icons[r].img() }
        <span>32</span>
        <span>SUN</span>
      </div>
    </div>
  )
}