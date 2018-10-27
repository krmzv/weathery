import React from 'react'
import { DetailBox } from '../UI/DetailBox'

export function TodayDetails({current}){
  return(
    <div className='widget widget__current widget__current--details'>
      <DetailBox val={current ? current.main.pressure : null} txt="Pressure"/>
      <DetailBox val={current ? current.visibility : null} txt="Visibility"/>
      <DetailBox val={current ? current.wind.speed : null} txt="Wind"/>
      <DetailBox val={current ? current.main.pressure : null} txt="Pressure"/>
    </div>
  )
}