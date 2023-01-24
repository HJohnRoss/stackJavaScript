import React from 'react'
import { Link } from 'react-router-dom'
import AllPlayers from '../components/AllPlayers'

const Main = (props) => {
  return (
    <>
      <p><Link to="/players/list">Manage Players</Link> | <Link to={`/status/game/0`}>Manage Player Status</Link></p>
      <p><Link to="/players/list">List</Link> | <Link to='/player/create'>Add Player</Link></p>

      <AllPlayers/>
    </>
  )
}

export default Main