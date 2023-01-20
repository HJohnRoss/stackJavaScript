import React from 'react'
import Main from './veiws/Main'
import Detail from './veiws/Detail'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Main />} path="/people/" />
        <Route element={<Detail />} path="/people/:id" />
      </Routes>
    </div>
  );
}

export default App;
