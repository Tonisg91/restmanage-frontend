import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import Menu from './components/common/Menu'
import Login from './components/common/Login'
import Signup from './components/common/Signup'
import NavBar from './components/common/NavBar'
import Home from './components/common/Home'
import NoMatch from './components/common/NoMatch'
import UnderConstruction from './components/common/UnderConstruction'

import ProductDetails from './components/client-side/products/ProductDetails'
import ProductList from './components/client-side/products/ProductList'
import Profile from './components/client-side/profile/Profile'
import Cart from './components/client-side/cart/Cart'
import ClientOrderDetails from './components/client-side/order/ClientOrderDetails'
import ClientDailyMenu from './components/client-side/dailyMenu/ClientDailyMenu'

import FlowControl from './components/admin-side/FlowControl'
import Orders from './components/admin-side/Orders/Orders';
import OrderDetails from './components/admin-side/Orders/OrderDetails';
import Config from './components/admin-side/config/Config'
import { isAdminRoute } from './tools/pathFunctions';
import configService from './tools/configService'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import AdminDailyMenu from './components/admin-side/dailyMenu/AdminDailyMenu'
import dailyMenuService from './tools/dailyMenuService'


function App() {
  const user = useSelector(state => state.user)
  const dailyMenu = useSelector(state => state.dailyMenu)
  const config = useSelector(state => state.config)
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const mainViewSelector = isAdminRoute(pathname) ? 'admin-main' : 'client-main'

  const sendConfigToRedux = data => dispatch({
    type: "SET_CONFIG",
    payload: data
  })

  const sendDailyMenuToRedux = data => dispatch({
    type: "SET_DMENU",
    payload: data
  })

  const getDataAndDispatch = (
      configCb = sendConfigToRedux, 
      dMenuCb = sendDailyMenuToRedux, 
      ) => {
        if (!dailyMenu) dailyMenuService.getDailyMenu(dMenuCb)
        if (!config) configService.getConfig(configCb)
  }

  useEffect(getDataAndDispatch, [])

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
        <Route path="/dailymenu" render={(props) => 
          <ClientDailyMenu 
            {...props} 
            dailyMenu={dailyMenu}
          />} 
        />
        <Route path="/places" component={UnderConstruction} />
        <Route path="/about" component={UnderConstruction} />
        <Route path="/order/:id" component={ClientOrderDetails} />
        <Route 
          path="/admin/menu" 
          render={(props) => 
              <FlowControl children={<Menu {...props} />  }/>
            }
        />
        <Route
          path="/admin/dailymenu"
          render={(props) =>
            <FlowControl children={<AdminDailyMenu {...props} />} />
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
        <Route path="/admin/signup" component={Signup} />
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
