import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Home from '../common/Home'
import Cart from './cart/Cart'
import Menu from '../common/Menu'
import ProductList from './products/ProductList'
import ProductDetails from './products/ProductDetails'
import Profile from './profile/Profile'
import NoMatch from '../common/NoMatch'
import NavBar from '../common/NavBar'

function ClientSideContainer() {
    const user = useSelector(state => state.user)

    return (
        <main className="default-colors" id="client-main">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/cart" component={Cart} />
                <Route exact path="/menu" component={Menu} />
                <Route path="/menu/product/:id" component={ProductDetails} />
                <Route path="/menu/:category" component={ProductList} />
                <Route exact path="/profile">
                    {!user ? <Redirect to="/login" /> : <Profile />}
                </Route>
                
            </Switch>
        </main>
    )
}

export default ClientSideContainer
