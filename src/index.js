import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'


  const initialUser = {
    user: JSON.parse(localStorage.getItem('currentUser')) || null
  }

  const initialProducts = {
    products: []
  }

  const userHandler = (state = initialUser, action) => {
    switch (action.type) {
      case 'LOG_USER':
          return {...state, user: action.payload}
      default:
          return state
    }
  }

  const productsHandler = (state = initialProducts, action) => {
    switch (action.type) {
      case 'SET_PRODUCTS':
        return {...state, products: action.payload}
      default:
        return state
    }
  }


  const allReducers = combineReducers({
    user: userHandler,
    products: productsHandler
  })

  const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
