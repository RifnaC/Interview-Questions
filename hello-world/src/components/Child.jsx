import React from 'react'
import InnerChild from '../InnerChild'

const Child = ({name}) => {
  return (
    <InnerChild  name={name}/>
  )
}

export default Child