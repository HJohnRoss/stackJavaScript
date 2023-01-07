import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Main from './components/Main/Main';
import Subcontents from './components/Subcontents/Subcontents';
import Advertisement from './components/Advertisement/Advertisement';


function App() {
    return (
        <div className="app">
            <Header />
            <div className="d-flex">
                <Navigation/>
                <Main>
                    <div className='d-flex'>
                        <Subcontents />
                        <Subcontents />
                        <Subcontents />
                    </div>
                    <Advertisement />
                </Main>
            </div>
        </div>
    );
}

export default App;