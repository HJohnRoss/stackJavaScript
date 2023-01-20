import './App.css';
import Main from './veiws/Main'
import { Routes, Route } from 'react-router-dom';
import OneProducts from './veiws/oneProducts';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main/>} path="/"/>
        <Route element={<OneProducts/>} path="/product/:id"/>
      </Routes>
    </div>
  );
}

export default App;
