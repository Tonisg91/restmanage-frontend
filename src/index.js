import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import './index.css'


  const initialUser = JSON.parse(localStorage.getItem('currentUser')) || null

  const initialProducts = []

  const initialCart = []

  const userReducer = (state = initialUser, action) => {
    switch (action.type) {
      case 'LOG_USER':
          return action.payload
      default:
          return state
    }
  }

  const productsReducer = (state = initialProducts, action) => {
    switch (action.type) {
      case 'SET_PRODUCTS':
        return  action.payload
      default:
        return state
    }
  }

  const cartReducers = (state = initialCart, action) => {
    switch (action.type) {
      case 'ADD_PRODUCT':
        return action.payload
      default:
        return state
    }
  }


  const allReducers = combineReducers({
    user: userReducer,
    products: productsReducer,
    cart: cartReducers
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
