import React, {useState, useEffect} from 'react'
import { StyledClientCartElement } from '../../styled-components/client-side'
import { useSelector } from 'react-redux'
import productService from '../../../tools/productService'

function CartElement({element, qty}) {
  
    const useCurrentCartElement = (productId = element._id) => {
      const products = useSelector(state => state.products)
      const productToShow = products.length ? products.find(({_id}) => (
        _id === productId
      )) : []
      const [currentProduct, setCurrentProduct] = useState(productToShow)
      const hasStoredProduct = productToShow.length

      useEffect(() => {
        if (!hasStoredProduct) productService.getSingleProduct(productId).then(setCurrentProduct)
      }, [hasStoredProduct])

      return currentProduct
    }
    
    const {name, price, image} = useCurrentCartElement()
  
    return (
      <StyledClientCartElement>
        <div 
          id="image-container"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div>
          <p>{name}</p>
          <p>{qty} x {price} €</p>
        </div>
          <button className="btn btn-red">X</button>
      </StyledClientCartElement>
    )
}

export default CartElement