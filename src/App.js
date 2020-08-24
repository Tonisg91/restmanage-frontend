import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Menu from './components/common/Menu'
import Login from './components/common/Login'
import Signup from './components/common/Signup'
import FlowControl from './components/admin-side/FlowControl'
import NavBar from './components/common/NavBar'
import Home from './components/common/Home'
import ProductDetails from './components/client-side/products/ProductDetails'
import './App.css'
import ProductList from './components/client-side/products/ProductList';
import Profile from './components/common/Profile';


function App() {
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
        <Route exact path="/menu" component={Menu} />
        <Route path="/menu/product/:id" component={ProductDetails} />
        <Route path="/menu/:category" component={ProductList} />
        <Route 
          path="/admin/menu" 
          render={(props) => 
              <FlowControl children={<Menu {...props} />  }/>
            }
        />
        <Route path="/signup" component={Signup} />
          <Route
            path="/admin/signup"
            render={(props) => 
                <FlowControl children={<Signup {...props} /> }/>
            }
          />
        <Route path="/login" component={Login} /> 
        <Route path="/profile" component={Profile} />
      </Switch>
    </main>
  );
}

export default App;
