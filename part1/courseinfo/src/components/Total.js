import React from 'react'

const Total = ({ parts }) => {
  return (
    <>{parts[0].exercises + parts[1].exercises + parts[2].exercises}</>
  )
}

export default Total