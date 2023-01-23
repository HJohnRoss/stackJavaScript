import React from 'react'
import Create from './veiws/Create'
import Edit from './veiws/Edit'
import Main from './veiws/Main'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Create />} path="/author/create" />
        <Route element={<Edit />} path="/author/edit/:id" />
      </Routes>
    </>
  );
}

export default App;
