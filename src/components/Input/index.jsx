import React, { useState } from 'react'

export const Input = () => {
  const [userInput, setUserInput] = useState('')
  const [displayValue, setDisplayValue] = useState('')

const handleInputChange = (event) =>{
  setUserInput(event.target.value)
}
console.log(userInput)

const handleButtonClick = () =>{
  setDisplayValue(userInput)
}
  
  return (
    <>
    <input type="text" onChange={handleInputChange} />
    <button type='submit' onClick={handleButtonClick}>Push</button>
    {displayValue &&  <p>{userInput}</p>}
    </>

  )
}

