import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Form from '../components/Form'

const Create = (props) => {
  const [name, setName] = useState("")


  return (
    <>
      <h1>Favorite authors</h1>
      <Link to="/">Home</Link>
      <h2>Add a new author:</h2>
      <Form create={true} name={name} setName={setName}/>
    </>
  )
}

export default Create