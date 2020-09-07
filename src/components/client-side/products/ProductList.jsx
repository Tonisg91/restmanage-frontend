import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import ClientProduct from './ClientProduct'
import { useSelector } from 'react-redux'
import { StyledClientProductList } from '../../styled-components/client-side'
import productService from '../../../tools/productService'
import Header from '../../common/Header'

function ProductList({match}) {
    const {category: currentCategory} = match.params
    const history = useHistory()

    const useSelectedProductList = (category = currentCategory) => {
        const storedProducts = useSelector(state => state.products.filter(({ cat }) => cat === category))
        const [currentProducts, setCurrentProducts] = useState(storedProducts)
        const hasStoredProducts = storedProducts.length

        useEffect(() => {
            if (!hasStoredProducts) productService.getCategory(currentCategory).then(setCurrentProducts)
        }, [hasStoredProducts])
        return currentProducts
    }

    const currentProducts = useSelectedProductList(currentCategory)

    const renderProducts = currentProducts.map(product => <ClientProduct product={product} key={product._id} />)

    return (
        <StyledClientProductList>
            <div id="header" className="blackboard-bg">
                <Header text={currentCategory}/>
            </div>
            <div id="main-content">
                {renderProducts}
            </div>
        </StyledClientProductList>
    )
}

export default ProductList