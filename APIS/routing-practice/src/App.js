import React from 'react'
import { useParams } from "react-router";
import {
    Routes,
    Route,
    Link
} from "react-router-dom";

const Home = (props) => {
    return (
        <div>
            <h1>Welcome</h1>
        </div>
    )
}

const Number = (props) => {
    const { num } = useParams()

    if (!isNaN(num)) {
        return (
            <div>
                <h1>The number is: {num}</h1>
            </div>
        )
    }
    return (
        <div>
            <h1>The word is: {num}</h1>
        </div>
    )
}

const Styling = () => {
    const { word } = useParams()
    const { text } = useParams()
    const { bg } = useParams()

    return (
        <div>
            <h1 style={{ color: text, backgroundColor: bg }}>The Word is: {word}</h1>
        </div>
    )
}

function App() {
    return (
        <>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/:num' element={<Number />} />
                <Route path='/:word/:text/:bg' element={<Styling />} />
            </Routes>
        </>
    );
}

export default App;
