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
        & div {
            width: 100%;
            display: flex;
            justify-content: center;
        }
        button {
            font-size: 16px;
        }
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
    .field {
        margin: 1.5em 0;
        background-color: white;
        border-radius: 5px;
    }
    h1, h2 {
        text-align: center;
        margin: .4em 0;
    }
    #product-list {
        max-height: 350px;
        overflow: scroll;
    }
    #categories ul {
        border: none;
        & li {
            padding: 0 .5em;
            font-size: 24px;
        }
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
            max-height: 32vh ;
            overflow: scroll;
        }
        .field {
            margin: 0;
        }
    }
`

const StyledAddProductForm = styled.div`
    form {
        display: flex;
        flex-direction: column;
        background-color: white;
        padding: 1em;
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
    #cancel-btn {
        margin-left: 1em;
    }
`
const StyledAdminProduct = styled.li`
    list-style: none;
    padding: .25em 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .btn-container button {
        margin-right: .5em;
    }
`

const StyledAdminOrders = styled.div`
    display: grid;
    grid-template-areas: 
        "header"
        "top"
        "mid"
        "bottom"
    ;
    grid-template-rows: minmax(min-content, max-content);
    padding: 0 1em;
    h1, h2 {
        text-align: center;
    }
    .field {
        background-color: white;
        margin: .8em 0;
        padding: .8em 0;
        & h2 {
            margin-bottom: .4em;
        }
        table {
            width: 100%;
        }
        div {
            max-height: 250px;
            overflow: scroll;
        }
    }
    table {
            border-collapse: collapse;
        }
    tr {
        border-bottom: solid transparent .5em;
        text-align: center;
        &:nth-child(even) {
        background-color: lightgray;
    }
    }
    #header {
        grid-area: header;
        margin-top: 1em;
    }
    @media (min-width: 768px) {
        display: grid;
        min-height: 93.8vh;
        grid-template-areas: 
            "header header"
            "top top"
            "bottom bottom"
            ;
        grid-auto-rows: minmax(min-content, max-content);
        gap: 12px 12px;
        .field div {
            max-height: 400px;
        }
        
        #header {
            grid-area: header;
        }
        #pending-orders {
            grid-area: top | 1 / 1 / 2 / 2;
        }
        #completed-orders {
            grid-area: top | 1 / 2 / 2 / 3;
        }
        #order-list {
            grid-area: bottom;
            max-height: 34vh;
            overflow: scroll;
            & tbody td {
                text-align: center;
            }
        }
    }
`

const StyledAdminSingleOrder = styled.div`
    min-height: 95vh;
    text-align: center;
    background-color: lightgray;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    #header {
        background: none;
        padding: 1.5em;
        & h1, i {
            -webkit-text-stroke: 1px black;
            text-shadow:
                3px 3px 0 black,
                -1px -1px 0 black,  
                1px -1px 0 black,
                -1px 1px 0 black,
                1px 1px 0 black;
        }
    }
    .container {
        width: 100%;
    }
    .list-element {
        display: flex;
        justify-content: space-between;
    }
    .btn {
        margin: .2em 0;
        font-size: 2em;
    }
    #ticket {
        background-color: white;
        width: 335px;
        padding: 1em 0;
        font-family: 'Courier New', Courier, monospace;
    }
    #restaurant-logo {
        margin: .5em 0;
        & img {
            width: 50%;
        }
    }
    i {
        font-size: 3em;
    }
    #order-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 1em;
    }
    #product-list {
        border: none;
        min-height: 75px;   
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
    & li:nth-child(even) {
        background-color: white;
        }
        li {
            width: 100%;
            margin: .5em 0;
            font-size: 1.2em;
            font-weight: 500;
        }
    }
    #amount-container {
        text-align: right;
    }
    #action-container {
        margin: 1em 0;
        & div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
    @media (min-width: 768px) {
        justify-content: space-between;
        #ticket {
        background-color: white;
        width: 430px;
        padding: 2em 0;
        font-family: 'Courier New', Courier, monospace;
    }
    }
`

const StyledAdminHome = styled.div`
    min-height: 92vh;
    text-align: center;
    padding-top: 2em;
    h1 {
        color: white;
    }
    .field {
        margin: 1em 1.5em;
    }
    img {
        width: 100px;
        height: 100px;
        background: none;
    }
`

const StyledAdminConfig = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledConfigForm = styled.div`
    background-color: var(--navbar);
    border-radius: 10px;
    margin: 1em;
    form {
        padding: .7em;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    label {
        text-align: center;
        color: white;
        margin-top: .5em;
        font-size: 24px;
        font-weight: 600;
    }
    input {
        padding: .8em;
        margin: .5em;
        border: none;
        border-radius: 5px;
        font-size: 18px;
    }
`

const StyledFlowControl = styled.div`
    width: 100%;
    min-height: 92vh;
    display: flex;
    flex-direciton: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    h2 {
        color: white;
        margin: 1em 0;
    }
    a {
        font-size: 24px;
    }
`

const StyledFormDailyMenu = styled.form`
        padding: .7em;
        display: flex;
        flex-direction: column;
        text-align: center;
    label {
        text-align: center;
        color: white;
        margin-top: .5em;
        font-size: 24px;
        font-weight: 600;
    }
    input {
        padding: .8em;
        margin: .5em;
        border: none;
        border-radius: 5px;
        font-size: 18px;
    }
    div {
        display: flex;
        flex-direction: column;
    }
    p {
        color: white;
    }
    #price-container, #button-container {
        align-items: center;
    }

`
const StyledDailyMenu = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    #form-container {
        margin: 5em;
        padding: 2.5em;
        border-radius: 25px;
        outline-offset: -10px;
        border: 7px solid #e2b05a;
    }
    #button-container {
        display: flex;
        justify-content: center;
        & button {
            padding: .8em;
        }
    }
`

export {
    StyledAdminNav,
    StyledAdminMenu,
    StyledAddProductForm,
    StyledAdminProduct,
    StyledAdminOrders,
    StyledAdminSingleOrder,
    StyledAdminHome,
    StyledAdminConfig,
    StyledConfigForm,
    StyledFlowControl,
    StyledFormDailyMenu,
    StyledDailyMenu
}
