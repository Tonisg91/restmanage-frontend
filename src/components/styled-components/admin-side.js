import styled from 'styled-components'

const StyledAdminNav = styled.nav`
    
    a {
        color: white;
        font-size: 1.2em;
        font-weight: bold;
    }
    i {
        font-size: 1.8em;
        cursor: pointer;
    }
    .default-nav {
        width: 100%;
        background-color: var(--navbar);
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.1em 2em;
    }
    #button-sidenav {
        transition: 0.7s;
        outline: none;
    }
    #sidenav {
        height: 100%;
        width: 0;
        position: fixed;
        z-index: 1;
        top: 60px;
        left: 0;
        background-color: var(--navbar);
        overflow-x: hidden;
        transition: 0.5s;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    #sidenav a {
        padding: 0 1em 1em;
        padding-right: 1em;
        text-decoration: none;
    }
    .active {
        color: var(--selected);
        text-decoration: underline !important;
    }
`

const StyledAdminMenu = styled.div`
    margin: 0 1.5em;
    h1, h2 {
        text-align: center;
        margin: .4em 0;
    }
    #content {
        padding-bottom: 2em;
    }
`

const StyledAddProductForm = styled.div`
    form {
        display: flex;
        flex-direction: column;
        background-color: white;
        padding: 1em;
        border-radius: 5px;
        border: 2px solid lightgray;
    }
    label {
        font-weight: bold;
        margin-top: .5em;
    }
    #submit {
        margin-top: 1em;
    }
`
const StyledAdminProduct = styled.td`
    list-style: none;
    padding: .25em 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .btn-container button:first-child {
        margin-right: .5em;
    }
`

export {
    StyledAdminNav,
    StyledAdminMenu,
    StyledAddProductForm,
    StyledAdminProduct
}