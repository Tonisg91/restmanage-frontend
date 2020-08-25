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
    padding-bottom: 1.5em;
    h1, h2 {
        text-align: center;
        margin: .4em 0;
    }
    @media (min-width: 768px) {
        display: grid;
        grid-template-areas: 
            "header header"
            "top top"
            "mid mid"
            "bottom bottom";
        grid-auto-rows: minmax(min-content, max-content);
        gap: 12px 12px;
        }
        #header {
            grid-area: header;
        }
        #categories {
            grid-area: top | 1 / 1 / 2 / 2;
        }
        #add-product {
            grid-area: top | 1 / 2 / 2 / 3;
        }
        #list-title {
            grid-area: mid;
        }
        #product-list {
            grid-area: bottom;
            max-height: 37vh;
            overflow: scroll;
        }
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
    input {
        padding: .5em 0;
    }
    input, textarea {
        border: 1.5px solid lightgray;
        border-radius: 5px;
        font-weight: bold;
        padding-left: .8em;
    }
    #image {
        border: none;
        padding: 0;
    }
    
    #submit {
        margin-top: 1em;
    }
`
const StyledAdminProduct = styled.li`
    list-style: none;
    padding: .25em 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .btn-container button:first-child {
        margin-right: .5em;
    }
    @media (min-width: 768px) {

    }
`

export {
    StyledAdminNav,
    StyledAdminMenu,
    StyledAddProductForm,
    StyledAdminProduct
}