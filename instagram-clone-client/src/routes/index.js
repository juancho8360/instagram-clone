import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './home';

const ToolBar = () => [
    <Link to="/">Home</Link>,
    <Link to="/register">Register</Link>
]

const Register = () => [<ToolBar />, <h1>Registro</h1>]

export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" exact component={Register} />
        </Switch>
    </Router>
);