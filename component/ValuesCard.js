import React from 'react'
import Image from 'next/image'

function ValuesCard(props) {
  return (
    <div className={props.class}>
      <div className='value-content'>
        <Image src={props.icon} alt='value icon' className='img' />
      </div>
      <h3 className='value-content'>{props.title}</h3>
      <p className='value-content'>{props.text}</p>
    </div>
  )
}

export default ValuesCard