import React, {useState} from 'react'
import axios from 'axios'

const PersonForm = (props) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const onSubmitHandler = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/api/people', {
      firstName,
      lastName
    })
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  }
  return(
    <>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="">First Name:</label>
        <input type="text" onChange={(e) => setFirstName(e.target.value)}/>
        <label htmlFor="">Last Name:</label>
        <input type="text" onChange={(e) => setLastName(e.target.value)}/>
        <button>Submit</button>
      </form>
    </>
  )
}

export default PersonForm