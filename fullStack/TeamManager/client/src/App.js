import React from 'react'
import Main from './veiws/Main';
import CreatePlayer from './veiws/CreatePlayer';
import Game from './veiws/Game'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Main />} path="/players/list" />
        <Route element={<Game />} path="/status/game/:id" />
        <Route element={<CreatePlayer />} path="/player/create" />
      </Routes>
    </>
  );
}

export default App;
