import React from 'react'
import FakeChart from '../UI/fakeChart'
import sun from '../../assets/icons/sun.svg'

export function TodayGeneral(){
  return(
    <div className='widget widget__current widget__current--general'>
      <div className='general-row'>
        <div className='temp'>
          <span className='degrees'>30°</span>
          <span className='sky'>Sunny</span>
        </div>
        <img className='sun-icon' src={sun} alt='sun icon' height={100}/>
      </div>
      <FakeChart/>
    </div>
  )
}