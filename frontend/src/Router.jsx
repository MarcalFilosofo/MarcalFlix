import React from 'react'
import { Switch, Route, Redirect} from 'react-router'

import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Admin from './components/Admin/AdminPages/Admin'

export default props =>
    <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/home" component={Home}/>
        <Route path="/administration" component={Admin}/>
        <Redirect from="+" to="/"/>
    </Switch>