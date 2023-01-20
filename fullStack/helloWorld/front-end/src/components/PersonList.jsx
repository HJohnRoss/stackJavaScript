import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

const PersonList = (props) => {
  const { removeFromDom } = props

  const deletePerson = (personId) => {
    axios.delete(`http://localhost:8000/api/people/${personId}`)
      .then(res => {
        removeFromDom(personId)
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      {props.people.map((person, i) =>
        <div key={i}>
          <p><Link to={`/people/${person._id}`}>{person.lastName}, {person.firstName}</Link></p>
          <button onClick={(e) => { deletePerson(person._id) }}>Delete</button>
        </div>
      )}
    </>
  )
}

export default PersonList;