import React from 'react'
import { DetailBox } from '../UI/DetailBox'

export function TodayDetails(){
  return(
    <div className='widget widget__current widget__current--details'>
      <DetailBox/>
      <DetailBox/>
      <DetailBox/>
      <DetailBox/>
    </div>
  )
}