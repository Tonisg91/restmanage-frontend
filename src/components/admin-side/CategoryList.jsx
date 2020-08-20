import React from 'react'
import GenericTable from '../common/GenericTable'

function CategoryList({categories}) {

    const categoryNames = categories.map(category => (
        <li key={category}>{category}</li>
    ))

    return (
        <GenericTable content={categoryNames}/>
    )
}

export default CategoryList