import React from 'react'
import { useHistory } from 'react-router-dom'

function ClientProduct({product}) {
    const history = useHistory()
    
    const { image, name, description, _id } = product
    const nameWithoutSpaces = name.replace(/ /g, "")
    console.log(nameWithoutSpaces)
    const redirectToDetails = () => {
        history.push(`/menu/${nameWithoutSpaces}`)
    }

    return (
        <div className="food-container border" onClick={redirectToDetails}>
            <div className="food-image" style={{ backgroundImage: `url(${image})` }}>
            </div>
            <div className="text-container">
                <h4>{name}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ClientProduct