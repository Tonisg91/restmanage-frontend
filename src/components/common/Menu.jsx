import React, { useEffect} from 'react'
import axios from 'axios'
import AddProduct from '../admin-side/AddProduct'
import {isAdminRoute} from '../../tools/pathFunctions'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

function Menu(props) {
    
    const {products} = useSelector(state => state.products)
    const dispatch = useDispatch()


    const getProducts = (hasProducts = products) => {
        axios.get('http://localhost:3000/menu')
            .then(res => {
                dispatch({
                    type: 'SET_PRODUCTS',
                    payload: res.data
                })
            })
    }

    useEffect(getProducts, [])

    const renderProducts = products.length ? 
    products.map(product => (
        <div key={product._id} className="food-container border">
            <div className="food-image" style={{backgroundImage: `url(${product.image})`}}>
            </div>
            {/* <img src={product.image} alt={product.name} /> */}
            <div className="text-container">
                <h4>{product.name}</h4>
                <p>{product.description}</p>
            </div>
        </div>
    )) : 
    null

    if (isAdminRoute(props.match.path)) {
        return (
            <div>
                <h1>menu vista administrador</h1>
                <div>
                    {renderProducts}
                </div>
                <div>
                    <AddProduct />
                </div>
            </div>
        )    
    }
    

    const StyledClientMenu = styled.main`
        width: 100%;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 15px;
        background-color: #fafafa;
        justify-items: center;
        margin: 2em 0 3.5em;
        .food-container {
            width: 90%;
            text-align: center;
            background: #FF416C;  /* fallback for old browsers */
            background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);  /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to right, #FF4B2B, #FF416C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            padding: 1em 0 0 0;
            box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.10);
        }
        .food-image {
            width: 100%;
            height: 120px;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            border-radius: 25px 0 0 0;
        }
        .border {
            border-radius: 25px 0 25px 0;
        }
        .text-container {
            background-color: #fafbfc;
            border-radius: 0 0 25px 0;
            padding: .8em 0;
        }
    `



    return (
        <StyledClientMenu>
            {renderProducts}
        </StyledClientMenu>
    )
    
}

export default Menu
