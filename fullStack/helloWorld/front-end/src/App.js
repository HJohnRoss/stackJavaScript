import React from 'react'
import Main from './veiws/Main'
import Detail from './veiws/Detail'
import Update from './veiws/Update'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Main />} path="/people/" />
        <Route element={<Detail />} path="/people/:id" />
        <Route element={<Update/>} path="/people/:id/edit"/>
      </Routes>
    </div>
  );
}

export default App;
