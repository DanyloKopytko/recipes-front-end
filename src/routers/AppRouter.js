import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import MainPage from '../Pages/MainPage';
import PublicRoute from './PublicRouter'
class AppRouter extends Component{
render(){
    return(
<BrowserRouter>
<div>
    <Switch>

        <PublicRoute path = "/" component= {MainPage}/>

    </Switch>
</div>
</BrowserRouter>

    )
};

}
export default AppRouter