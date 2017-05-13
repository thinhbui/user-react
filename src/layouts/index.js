import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './main/main.js'
import Login from './login/login.js';
export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Switch>
                        <Route exact path='/' component={Main} />
                    
                        <Route render={() => {
                            return (<h1>Page Not Found</h1>)
                        }} />
                    </Switch>
                </div>
            </Router>
        )
    }
}