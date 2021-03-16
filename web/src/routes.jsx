import React from 'react';

import {BrowserRouter, Route} from 'react-router-dom';

//Pages
import Home from './pages/Home';
import Login from './pages/Login';


function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" component={Login} exact/>    
            <Route path="/home" component={Home} exact/>    
        </BrowserRouter>
    )
}

export default Routes;