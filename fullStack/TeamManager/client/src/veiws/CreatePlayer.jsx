import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const CreatePlayer = () => {
  const [name, setName] = useState("")
  const [position, setPosition] = useState("")
  const [errors, setErrors] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/api/player/create', {
      name,
      position
    })
      .then(res => console.log(res))
      .catch(err => {
        const errorResponse = err.response.data.errors
        const errArr = []
        for (const key of Object.keys(errorResponse)) {
          errArr.push(errorResponse[key].message)
        }
        setErrors(errArr)
      })
  }

  return (
    <>
      <p><Link to="/players/list">Manage Players</Link> | <Link to={`/status/game/0`}>Manage Player Status</Link></p>
      <p><Link to="/players/list">List</Link> | <Link to='/player/create'>Add Player</Link></p>

      <form onSubmit={handleSubmit}>
        <h2>Add Player</h2>
        {
          errors.map((err, i) => <p key={i}>{err}</p>)
        }
        <label>Player Name: </label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <label>Position</label>
        <input type="text" onChange={(e) => setPosition(e.target.value)} />
        <button>Create</button>
      </form>
    </>
  )
}

export default CreatePlayer