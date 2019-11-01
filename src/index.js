import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from "react-router-dom";
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import { fetchUsers, fetchUser } from './actions';

import './index.css';
import App from './components/App';
import UserPage from './components/UserPage';
import Users from './components/Users';

import * as serviceWorker from './serviceWorker';

const middleware = [
    reduxThunk
  ];
  
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(...middleware)
    )
);

store.dispatch(fetchUsers());

store.dispatch(fetchUser(3));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App className="App">
                <header className="App-header">
                    <Route exact path="/" render={() => <Users /> } />
                    <Route exact path="/users/:id" render={(props) => <UserPage {...props} /> }/>
                </header>
            </App>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
