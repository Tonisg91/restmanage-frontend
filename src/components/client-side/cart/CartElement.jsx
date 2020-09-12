import React, {useState, useEffect} from 'react'
import { StyledClientCartElement } from '../../styled-components/client-side'
import { useSelector } from 'react-redux'
import productService from '../../../tools/productService'

function CartElement({element, qty, removeElement}) {
  
    const useCurrentCartElement = (productId = element._id) => {
      const products = useSelector(state => state.products)
      const productToShow = products.length ? products.find(({_id}) => (
        _id === productId
      )) : []
      const [currentProduct, setCurrentProduct] = useState(productToShow)
      const hasStoredProduct = productToShow.length

      useEffect(() => {
        if (!hasStoredProduct) productService.getSingleProduct(element._id).then(setCurrentProduct)
      }, [hasStoredProduct])

      return currentProduct
    }
    
    const {name, price} = useCurrentCartElement()
  
    return (
      <StyledClientCartElement>
        <div>
          <p>{name}</p>
          <p>{qty} x {price} €</p>
        </div>
          <button 
            onClick={() => removeElement(element)}
            className="btn btn-red"
            >
            X
          </button>
      </StyledClientCartElement>
    )
}

export default CartElement