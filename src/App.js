import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
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
import { useSelector } from 'react-redux';
import NoMatch from './components/common/NoMatch'


function App() {
  const user = useSelector(state => state.user)


  return (
    <main className="default-colors">
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
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
        <ToastContainer/>
    </main>
  );
}

export default App;
