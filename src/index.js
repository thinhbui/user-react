import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { persistStore, autoRehydrate } from 'redux-persist';
import { reducer } from './reducer/reducer';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './layouts/index.js';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import './index.css';
const store = compose(autoRehydrate())(createStore)(reducer);
export default class AppProvider extends Component {
    constructor() {
        super()
        this.state = { rehydrated: false } 
    }

    componentWillMount() {
        persistStore(store, {}, () => {
            this.setState({ rehydrated: true })
        })
    }

    render() {
        if (!this.state.rehydrated) {
            return <div>Loading...</div>
        }
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

ReactDOM.render(
    <MuiThemeProvider>
        <AppProvider />
    </MuiThemeProvider>,
    document.getElementById('root')
);
