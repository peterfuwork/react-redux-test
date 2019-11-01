import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from "react-router-dom";
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import { fetchUsers } from './actions';

import './index.css';
import App from './components/App';
import UserPage from './components/UserPage';
import Container from './components/Container';

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

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App className="App">
                <header className="App-header">
                    <Route exact path="/" render={() => <Container /> } />
                    <Route exact path="/users/:id" render={(props) => <UserPage {...props} /> }/>
                </header>
            </App>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
