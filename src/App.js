import s from './style.module.css';
import HomePage from "./routes/Home"
import GamePage from "./routes/Game";
import AboutPage from "./routes/About";
import ContactPage from "./routes/Contact";
import NotFoundPage from "./routes/NotFound";
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch  } from "react-router-dom";
import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";

function App() {
    // const [page, setPage] = useState('app');
    // const handleChangePage=(page)=>{
    //
    //     console.log("<Main/>");
    //     setPage(page);
    // };
    return (
        <BrowserRouter>
            <Switch>
                <Route>
                    <>
                        <MenuHeader/>
                        <Switch>
                            <Route path="/" exact component={HomePage}/>
                            <Route path="/home" component={HomePage}/>
                            <Route path="/game" component={GamePage}/>
                            <Route path="/about" component={AboutPage}/>
                            <Route path="/contact" component={ContactPage}/>
                            <Route component={NotFoundPage}/>
                        </Switch>
                        <Footer/>
                    </>
                </Route>
                <Route component={NotFoundPage}/>

            </Switch>
        </BrowserRouter>
        );

    // switch (page) {
    //     case("app"):
    //         return <HomePage onChangePage={handleChangePage}/>;
    //     case ("game"):
    //         return <GamePage onChangePage={handleChangePage}/>;
    //     default:
    //         return <HomePage onChangePage={handleChangePage} />;
    // }
}

export default App;
