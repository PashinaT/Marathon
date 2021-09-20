import s from './style.module.css';
import HomePage from "./routes/Home"
import GamePage from "./routes/Game";
import AboutPage from "./routes/About";
import ContactPage from "./routes/Contact";
import NotFoundPage from "./routes/NotFound";
import { BrowserRouter, Route, Switch, Redirect  } from "react-router-dom";
import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";
import {FireBaseContext} from "./context/FireBaseContext";
import Firebase from "./service/firebase";


function App() {

    return (
        <FireBaseContext.Provider value={new Firebase()}>
        <BrowserRouter>
            <Switch>
                <Route  path="/404" component={NotFoundPage}/>
                <Route>
                    <>
                        <MenuHeader/>
                        <Switch>
                            <Route path="/" exact component={HomePage}/>
                            <Route path="/home" component={HomePage}/>
                            <Route path="/game" component={GamePage}/>
                            <Route path="/about" component={AboutPage}/>
                            <Route path="/contact" component={ContactPage}/>
                            <Route render={()=>{<Redirect to={"/404"}/>}}/>
                        </Switch>
                        <Footer/>
                    </>
                </Route>


            </Switch>
        </BrowserRouter>
        </FireBaseContext.Provider>
        );

}

export default App;
