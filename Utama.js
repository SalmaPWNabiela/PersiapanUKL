import React from 'react'

import {Route, Switch} from 'react-router-dom'
import Register from './register'
import Login from './login'


const Utama = () =>
(
    <Switch>
        <Route exact path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
    </Switch>
)

export default Utama