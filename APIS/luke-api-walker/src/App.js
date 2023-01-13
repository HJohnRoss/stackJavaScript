import React, { useState } from 'react'
import Form from './components/Form'
import Api from './components/Api'
import {
    Routes,
    Route,
    Link
} from "react-router-dom";

function App() {
    const [unit, setUnit] = useState("people");
    const [oneId, setOneId] = useState(1);
    return (
        <>
            <Form unit={unit} setUnit={setUnit} oneId={oneId} setOneId={setOneId} />
            <Routes>
                <Route path="/:category/:id" element={<Api unit={unit} setUnit={setUnit} oneId={oneId} setOneId={setOneId} />} />
            </Routes>
        </>
    );
}

export default App;
