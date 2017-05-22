import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main, { Document } from './main/main.js';
import Lesson from './main/lesson.js';
import Login from './login/login.js';
import Nav from './main/nav'
export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={Main} />
                        <Route path='/login' component={Login} />
                        <Route path='/document' component={Document} />
                        <Route render={() => {
                            return (<h1>Page Not Found</h1>)
                        }} />
                    </Switch>
                </div>
            </Router>
        )
    }
}