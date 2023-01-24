import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const Game = (props) => {
  const [allPlayers, setAllPlayers] = useState([])
  const { id } = useParams()

  useEffect(() => {
    axios.get('http://localhost:8000/api/all')
      .then(res => {
        setAllPlayers(res.data)
      })
      .catch(err => console.log(err))
  }, [allPlayers])

  const updatePlayer = (e, player) => {
    let tempArr = player.action
    console.log(tempArr)
    tempArr[id] = parseInt(e.target.value)
    console.log(tempArr)
    axios.put(`http://localhost:8000/api/player/update/${player._id}`, {
      action: tempArr
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  return (
    <>
      <p><Link to="/players/list">Manage Players</Link> | <Link to={`/status/game/0`}>Manage Player Status</Link></p>
      <p><Link to="/players/list">List</Link> | <Link to='/player/create'>Add Player</Link></p>

      <p><Link to="/status/game/0">Game 1</Link> | <Link to="/status/game/1">Game 2</Link> | <Link to="/status/game/2">Game 3</Link></p>

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
                  <button onClick={(e) => updatePlayer(e, player)} style={player.action[id] === 1 ? { backgroundColor: "green" } : {}} value={1}>Playing</button>
                  <button onClick={(e) => updatePlayer(e, player)} style={player.action[id] === -1 ? { backgroundColor: "red" } : {}} value={-1}>Not Playing</button>
                  <button onClick={(e) => updatePlayer(e, player)} style={player.action[id] === 0 ? { backgroundColor: "yellow" } : {}} value={0}>Undecided</button>
                </td>
              </tr>
            </tbody>
          )
        }
      </table>
    </>
  )
}

export default Game