import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Menu from './components/common/Menu'
import Login from './components/common/Login'
import Signup from './components/common/Signup'
import Wrapper from './components/admin-side/Wrapper'
import NavBar from './components/common/NavBar'
import Home from './components/common/Home'
import './App.css'


function App() {
  return (
    <main className="default-colors">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}/>
          <Route
            exact
            path="/admin"
            render={(props) => <Wrapper children={<Home {...props} />} />}
          />
        <Route path="/menu" component={Menu}/>
        <Route 
          path="/admin/menu" 
          render={(props) => <Wrapper children={<Menu {...props} />}/>}
        />
        <Route path="/signup" component={Signup}/>
          <Route
            path="/admin/signup"
            render={(props) => <Wrapper children={<Signup {...props} />} />}
          />
        <Route path="/login" component={Login}/> 
      </Switch>
    </main>
  );
}

export default App;
