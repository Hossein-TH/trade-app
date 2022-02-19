import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import HomePage from "./Pages/HomePage";
import DownloadPage from "./Pages/DownloadPage";
import TutorialPage from "./Pages/TutorialPage";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";


function App() {
    return (
        <Router>
            <ScrollToTop/>
            <CssBaseline/>
            <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/Download-Page" exact component={DownloadPage}/>
            <Route path="/Tutorial-Page" exact component={TutorialPage}/>
            </Switch>
        </Router>
    );
}

export default App;
