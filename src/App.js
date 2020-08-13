import React from 'react';
import { Switch, Route } from 'react-router-dom'
import AdminHome from './components/admin-side/AdminHome'
import ClientHome from './components/client-side/ClientHome'
import Menu from './components/common/Menu'
import Login from './components/common/Login';
import Signup from './components/common/Signup';
import Wrapper from './components/admin-side/Wrapper'

function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={ClientHome}/>
      {/* <Route exact path="/admin" component={AdminHome}/> */}
        <Route
          exact
          path="/admin"
          render={(props) => <Wrapper children={<AdminHome {...props} />} />}
        />
      <Route path="/menu" component={Menu}/>
      <Route 
        path="/admin/menu" 
        render={(props) => <Wrapper children={<Menu {...props} />}/>}
      />
      <Route path="/signup" component={Signup}/>
      {/* <Route path="/admin/signup" component={Signup}/> */}
        <Route
          path="/admin/signup"
          render={(props) => <Wrapper children={<Signup {...props} />} />}
        />
      <Route path="/login" component={Login}/> 
    </Switch>
    </>
  );
}

export default App;
