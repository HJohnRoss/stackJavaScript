import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const AllPlayers = (props) => {
  const [allPlayers, setAllPlayers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/all')
      .then(res => {
        setAllPlayers(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  const removeFromDom = id => {
    setAllPlayers(allPlayers.filter(player => player._id != id));
  }

  const deletePlayer = (id) => {
    axios.delete(`http://localhost:8000/api/player/delete/${id}`)
      .then(res => {
        removeFromDom(id)
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        {
          allPlayers.map((player, i) =>
            <tbody key={i}>
              <tr>
                <td>{player.name}</td>
                <td>{player.position}</td>
                <td>
                  <button onClick={(e) => deletePlayer(player._id)}>Delete</button>
                </td>
              </tr>
            </tbody>
          )
        }
      </table>
    </>
  )
}

export default AllPlayers