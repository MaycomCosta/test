import React from 'react'

export const Input = () => {

const handleInputChange = (event) =>{
  console.log(event.target.value)
}
  
  return (
<input type="text" onChange={handleInputChange} />
  )
}

