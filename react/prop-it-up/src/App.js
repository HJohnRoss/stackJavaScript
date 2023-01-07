import React from 'react';
import './App.css';

import ReactComponent from './components/ReactComponent';

function App() {
    return (
        <div>
            <ReactComponent firstName={"Jane"} hairColor={"Black"} age={45} lastName={"Doe"}/>
            <ReactComponent firstName={"John"} hairColor={"Brown"} age={88} lastName={"Smith"}/>
            <ReactComponent firstName={"Millard"} hairColor={"Brown"} age={50} lastName={"Fillmore"}/>
            <ReactComponent firstName={"Maria"} hairColor={"Brown"} age={62} lastName={"Smith"}/>
        </div>
    );
}

export default App;
