import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch, hashHistory } from 'react-router-dom';
// import { } from 'react-router-dom';
import Main from './main/main.js';
import Document from './document/document.js';
import Lesson, { Learn, Exam } from './lesson/lesson.js';
import Login from './login/login.js';
import Nav from './main/nav';
import Payment from './payment/payment';
import Person from './person/person';
import Question from './question_detail/question_detail';
import OneAskPlaza, { DetailItem } from './plaza/plaza.js';
import Setting from './setting/setting.js';

export default class App extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <div>
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={Main} />
                        <Route path='/login' component={Login} />
                        <Route path='/document' component={Document} />
                        <Route path='/pathway' component={Document} />
                        <Route path='/person' component={Person} />
                        <Route path='/plaza' component={OneAskPlaza} />
                        <Route path='/detail/:id' component={DetailItem} />
                        <Route path='/lesson/:id' component={Lesson} />
                        <Route path='/exam/:title' component={Exam} />
                        <Route path='/payment' component={Payment} />
                        <Route path='/setting' component={Setting} />
                        <Route path='/question-detail/:id' component={Question} />
                        <Route render={() => {
                            return (<h1>Page Not Found</h1>)
                        }} />
                    </Switch>
                </div>
            </Router>
        )
    }
}
