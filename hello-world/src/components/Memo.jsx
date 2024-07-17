import React from 'react'

const Memo = ({count}) => {
console.log("memo")
  return (
    <div>memo -{count}</div>
  )
}

export default React.memo(Memo)