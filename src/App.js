import s from './style.module.css';
import HomePage from "./routes/Home"
import GamePage from "./routes/Game";
import AboutPage from "./routes/About";
import ContactPage from "./routes/Contact";
import NotFoundPage from "./routes/NotFound";
import {BrowserRouter, Route, Switch, Redirect, useLocation} from "react-router-dom";
import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";
import cn from 'classnames'
import {NotificationContainer} from 'react-notifications'
import 'react-notifications/lib/notifications.css'
import PrivateRoute from './components/PrivateRoute'
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUserAsync, selectUserLoading} from "./store/users";

const App = () => {

    const isUserLoading = useSelector(selectUserLoading);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getUserAsync());
    },[])

    if (isUserLoading)
    {
        return "Loading"
    }
    return (
        <BrowserRouter>
            <Switch>
                <Route  path="/404" component={NotFoundPage}/>
                <Route>
                    <>
                        <MenuHeader/>
                        <div className={cn(s.wrap,{[s.isHomePage]:true})}>
                            <Switch>
                                <Route path="/" exact component={HomePage}/>
                                <Route path="/home" component={HomePage}/>
                                <PrivateRoute path="/game" component={GamePage}/>
                                <PrivateRoute path="/about" component={AboutPage}/>
                                <PrivateRoute path="/contact" component={ContactPage}/>
                                <Route render={()=>{<Redirect to={"/404"}/>}}/>
                            </Switch>
                        </div>
                        <Footer/>
                    </>
                </Route>


            </Switch>
            <NotificationContainer/>
        </BrowserRouter>
        );

};

export default App;
