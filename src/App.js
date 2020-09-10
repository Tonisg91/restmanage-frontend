import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import Menu from './components/common/Menu'
import Login from './components/common/Login'
import Signup from './components/common/Signup'
import FlowControl from './components/admin-side/FlowControl'
import NavBar from './components/common/NavBar'
import Home from './components/common/Home'
import ProductDetails from './components/client-side/products/ProductDetails'
import './App.css'
import ProductList from './components/client-side/products/ProductList'
import Profile from './components/client-side/profile/Profile'
import Cart from './components/client-side/cart/Cart'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Orders from './components/admin-side/Orders/Orders';
import OrderDetails from './components/admin-side/Orders/OrderDetails';
import NoMatch from './components/common/NoMatch'
import { isAdminRoute } from './tools/pathFunctions';
import Config from './components/admin-side/config/Config'
import configService from './tools/configService'


function App() {
  const user = useSelector(state => state.user)
  const config = useSelector(state => state.config)
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const mainViewSelector = isAdminRoute(pathname) ? 'admin-main' : 'client-main'

  const sendConfigToRedux = data => dispatch({
    type: "SET_CONFIG",
    payload: data
  })

  const getConfigAndDispatch = (cb = sendConfigToRedux, forceUpdate = false) => {
    if (!config) configService.getConfig(cb)
  }

  useEffect(getConfigAndDispatch, [])

  return (
    <main className="default-colors" id={mainViewSelector}>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/admin"
          render={(props) => <FlowControl children={<Home {...props} />} />}
        />
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/menu" component={Menu} />
        <Route path="/menu/product/:id" component={ProductDetails} />
        <Route path="/menu/:category" component={ProductList} />
        <Route 
          path="/admin/menu" 
          render={(props) => 
              <FlowControl children={<Menu {...props} />  }/>
            }
        />
        <Route
          exact
          path="/admin/orders"
          render={(props) =>
            <FlowControl children={<Orders {...props} />} />
          }
        />
        <Route
          path="/admin/orders/:id"
          render={(props) =>
            <FlowControl children={<OrderDetails {...props} />} />
          }
        />
        <Route
          path="/admin/config"
          render={(props) => 
            <FlowControl children={<Config {...props} />} />
          }  
        />
        <Route
          path="/admin/signup"
          render={(props) => 
            <FlowControl children={<Signup {...props} /> }/>
          }
        />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} /> 
        <Route exact path="/profile">
          {!user ? <Redirect to="/login"/> : <Profile />}
        </Route>
        <Route path="*" component={NoMatch} />
      </Switch>
        <ToastContainer/>
    </main>
  );
}

export default App;
