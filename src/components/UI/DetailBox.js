import React from 'react'

export function DetailBox({val = 0, txt = 'abc'}){
  return (
    <div className='detail__box'>
      <span className='text--prim'>{val}</span>
      <span className='text--sec'>{txt}</span>
    </div>
  )
}