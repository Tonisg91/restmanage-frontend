import React from 'react';
import { Switch, Route } from 'react-router-dom'
import AdminHome from './components/admin-side/AdminHome'
import ClientHome from './components/client-side/ClientHome'
import Menu from './components/common/Menu'
import Login from './components/common/Login';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ClientHome}/>
      <Route exact path="/admin" component={AdminHome}/>
      <Route path="/menu" component={Menu}/>
      <Route path="/admin/menu" component={Menu}/>
      <Route path={"/login"} component={Login}/> 
    </Switch>
  );
}

export default App;
