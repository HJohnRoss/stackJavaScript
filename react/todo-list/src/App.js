import React, { useState } from 'react'
import OneForm from './components/OneForm'
import List from './components/List'

function App() {
    const [todo, setToDo] = useState([]);
    return (
        <div>
            <OneForm setTodo={setToDo} todo={todo} />
            <List setTodo={setToDo} todo={todo} />
        </div>
    );
}

export default App;
