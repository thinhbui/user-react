import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './main/main.js';
import Document from './document/document.js';
import Lesson, { Learn, Exam } from './lesson/lesson.js';
import Login from './login/login.js';
import Nav from './main/nav';
import Payment from './payment/payment';
import Person from './person/person';
import OneAskPlaza, { DetailItem } from './plaza/plaza.js';
import Setting from './setting/setting.js';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={Main} />
                        <Route path='/login' component={Login} />
                        <Route path='/document' component={Document} />
                        <Route path='/pathway' component={Document} />
                        <Route path='/person' component={Person} />
                        <Route path='/plaza' component={OneAskPlaza} />
                        <Route exact path='/lesson' component={Lesson} />
                        <Route path='/lesson/exam/:title' component={Exam} />
                        <Route path='/payment' component={Payment} />
                        <Route path='/detail' component={DetailItem} />
                        <Route path='/setting' component={Setting} />
                        <Route render={() => {
                            return (<h1>Page Not Found</h1>)
                        }} />
                    </Switch>
                </div>
            </Router>
        )
    }
}
