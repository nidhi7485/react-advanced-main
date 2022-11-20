import React, { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'niku',
    age: 22,
    message: 'random message',
  })
  const changeMessage = () => {
    setPerson({ ...person, message: 'hello world' })
    console.log(person.message)
  }
  return (
    <>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.message}</h2>
      <button className='btn' onClick={changeMessage}>
        change msg
      </button>
    </>
  )
}

export default UseStateObject
