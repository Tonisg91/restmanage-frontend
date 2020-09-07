import React from 'react'
import { useHistory } from 'react-router-dom'

function Header({text}) {
    const history = useHistory()
    const goBack = () => history.goBack()

    return (
        <>
            <i className="fas fa-arrow-left" onClick={goBack}></i>
            <h1>{text}</h1>   
        </>
    )
}

export default Header
