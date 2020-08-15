import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Menu from './components/common/Menu'
import Login from './components/common/Login'
import Signup from './components/common/Signup'
import FlowControl from './components/admin-side/FlowControl'
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
            render={(props) => <FlowControl children={<Home {...props} />} />}
          />
        <Route path="/menu" component={Menu}/>
        <Route 
          path="/admin/menu" 
          render={(props) => <FlowControl children={<Menu {...props} />}/>}
        />
        <Route path="/signup" component={Signup}/>
          <Route
            path="/admin/signup"
            render={(props) => <FlowControl children={<Signup {...props} />} />}
          />
        <Route path="/login" component={Login}/> 
      </Switch>
    </main>
  );
}

export default App;
