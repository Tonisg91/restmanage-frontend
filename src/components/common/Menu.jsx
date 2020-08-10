import React, {useState, useEffect} from 'react'
import axios from 'axios'
import AddProduct from '../admin-side/AddProduct'

function Menu(props) {
    const isAdminRoute = props.location.pathname === '/admin/menu'
    
    const [products, setProducts] = useState([])

    const getProducts = () => {
        axios.get('http://localhost:3000/menu')
            .then(res => {
                setProducts(res.data)
            })
    }

    useEffect(getProducts, [])

    const renderProduct = products.map(product => (
        <div key={product._id}>
            <img src={product.image} alt={product.name}/>
            <div>
                <h4>{product.name}</h4>
                <p>{product.description}</p>
            </div>
        </div>
    ))

    if (isAdminRoute) {
        return (
            <div>
                <h1>menu vista administrador</h1>
                <div>
                    {renderProduct}
                </div>
                <div>
                    <AddProduct />
                </div>
            </div>
        )    
    }
    
    return (
        <div>
            <h1>menu vista cliente</h1>
            {renderProduct}
        </div>
    )
    
}

export default Menu
