import s from './style.module.css';
import HomePage from "./routes/Home"
import GamePage from "./routes/Game";
import React, { useState } from 'react';

function App() {
    const [page, setPage] = useState('app');
    const handleChangePage=(page)=>{

        console.log("<Main/>");
        setPage(page);
    };
    switch (page) {
        case("app"):
            return <HomePage onChangePage={handleChangePage}/>;
        case ("game"):
            return <GamePage/>;
        default:
            return <HomePage onChangePage={handleChangePage} />;
    }
}

export default App;
