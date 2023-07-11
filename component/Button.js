import React from 'react'

function Button(props) {
  return (
    <div>
        <button type={props.type}>{props.text}</button>
    </div>
  )
}

export default Button