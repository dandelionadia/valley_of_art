import * as React from 'react'

export function Grid(props) {
  return (
    <div className={`grid lg:grid-cols-12 gap-32 ${props.className || ''}`}>
      {props.children}
    </div>
  )
}
