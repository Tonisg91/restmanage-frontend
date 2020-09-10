import styled from 'styled-components'

const StyledClientHome = styled.div`
        #header-locations {
            text-align: center;
            width: 100%;
            padding: .3em 0;
            background-color: black;
            & i {
                padding-right: .35em;
            }
            a {
                color: white;
                font-size: 16px;
                font-weight: 600;
                text-decoration: none;
            }
        }
        header {
            height: 100vh;
        }
        #head-logo {
            width: 100%;
            & img {
                width: 100%;
            }
        }
        #head-img {
            width: 100%;
            height: 100%;
            background-image: linear-gradient(
                                rgba(0, 0, 0, 0.5),
                                rgba(0, 0, 0, 0.5)
                                ),
                                url("https://res.cloudinary.com/dkejgwlha/image/upload/v1599485327/RestManager/BeFunky-photo_eyucrz.jpg");
            background-repeat: no-repeat;
            background-size: cover;
            & ::before {
                background-color: 
            }
        }
        nav {
            width: 100%;
            display: flex;
            flex-direction: column;
            margin-top: 8em;
            & a {
                color: white;
                text-decoration: none;
                font-size: 18px;
                font-weight: 600;
                text-transform: uppercase;
            }
            div {
                display: flex;
                justify-content: space-around;
                margin: .5em 0;
            }
        }
        @media (min-width: 768px) {
            #head-logo {
                width: 100%;
                display: flex;
                justify-content: center;
            }
            #head-logo img {
                width: 50%;
            }
            nav a, #header-locations a {
                font-size: 24px;
            }
        }
        @media (min-width: 1024px) {
            #head-logo img {
                width: 25%;
            }
            nav a, #header-locations a {
                font-size: 32px;
            }
        }
    `

const StyledClientMenu = styled.div`
        display: grid;
        grid-auto-flow: columns;
        grid-template-columns: repeat(auto-fill, 150px);
        @media (min-width: 768px) {
            grid-template-columns: repeat(auto-fill, 300px);
        }
        gap: 25px;
        justify-content: center;
        padding: 2em 0 5em;
        .food-container {
            justify-content:center;
            text-align: center;
            padding: 1em 0 0 0;
            box-shadow: 8px 8px 7px 0px rgba(0,0,0,0.10);
        }
        .food-image {
            width: 100%;
            height: 28vh;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            border-radius: 25px 0 0 0;
        }
        .border {
            border-radius: 25px 0 25px 0;
        }
        .text-container {
            border-radius: 0 0 25px 0;
            padding: .8em 0;
            color: white;
        }
        .text-container p {
            font-size: 1.5em;
            font-weight: 700;
            margin: .25em 0;
        }
        .text-container div {
            display: flex;
            justify-content: space-around;
            align-items: center;
            font-size: 1.4em;
        }
        .text-container i {
            font-size: 1.6em;
        }
    `

const StyledClientProductList = styled.div`
        #main-content {
            padding: 2em 0 5em;
            display: grid;
            grid-auto-flow: columns;
            grid-template-columns: repeat(auto-fill, 300px);
            gap: 25px;
            justify-content: center;
        }
        .food-container {
            justify-content:center;
            text-align: center;
            background-color: var(--blue-btn);
            padding: 1em 0 0 0;
            box-shadow: 8px 8px 7px 0px rgba(0,0,0,0.10);
        }
        .food-image {
            width: 100%;
            height: 28vh;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            border-radius: 25px 0 0 0;
            color: white;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            & h2 {
                padding-bottom: .8em;
                font-size: 1.9em;
            }
        }
        .border {
            border-radius: 25px 0 25px 0;
        }
        .text-container {
            background-color: #fafbfc;
            border-radius: 0 0 25px 0;
            padding: .8em 0;
        }
        .text-container p {
            font-size: 1.5em;
            font-weight: 700;
            margin: .25em 0;
        }
        .text-container div {
            display: flex;
            justify-content: space-around;
            align-items: center;
            font-size: 1.4em;
            
        }
        .text-container i {
            font-size: 1.6em;
        }
        a {
            color: white;
        }
    `

const StyledClientNav = styled.nav`
        position: fixed;
        bottom: 0;
        overflow: hidden;
        width: 100%;
        padding: 0.25em 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-radius: 10px 10px 0 0;
        .nav-element {
            text-align: center;
            color: var(--background-color)
        }
        p {
            font-size: 16px;
        }
        i {
            font-size: 1.4em;
            padding: 0.5em;
            width: 50px;
            text-align: center;
        }
        .active i , .active p{
            color: var(--blue-btn);
        }
    `

const StyledClientSingleProduct = styled.div`
    .food-container {
        height: 100%;
        margin-top: 2em;
    }
    .food-image {
        width: 300px;
        height: 300px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    .text-container {
        text-align: center;
        margin-top: 2em;
    }
    h4 {
        font-size: 1.5em;
    }
`
//TODO: ESTILOS PARTE INFO PRODUCT-DETAILS
const StyledClientProductDetails = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    li {
            list-style: none;
        }
    #product-container {
        width: 100%;
        min-height: 85vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    #product-info {
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        border: 1px solid black;
        border-radius: 25px;
        padding: 2em 0;
        & p {
            padding: .5em 0;
        }
        #price {
            font-size: 2em;
            font-weight: 600;
            padding: .5em 0;
        }
    }
`
const StyledClientCart = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 90%;
    grid-template-areas: 
        "header"
        "mid"
        "bottom"
    ;
    grid-auto-rows: minmax(min-content, max-content);
    gap: 50px;
    justify-content: center;
    #title {
        grid-area: header;
        display: flex;
        justify-content: center;
        & h1 {
            padding-top: 1em;
            color: white;
            font-size: 3em;
        }
    }
    #email-container {
        font-size: .9em;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    #email {
        margin: 1em 0;
        padding: 1em;
        font-size: .8em;
        border-radius: 5px; 
        border: none;
    }
    #cart-container {
        grid-area: mid;
        max-height: 100%;
        min-height: 150px;
        overflow: scroll;
        border-radius: 6px;
        padding: 1em;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        outline-offset: -10px;
        border: 7px solid #e2b05a;
        & li {
            background: none;
            font-size: 16px;
            font-weight: 600;
            margin: .3em 0;
        }
        ul {
            border: none;
        }
    }

    #action-container {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    #amount-container {
        display: flex;
        align-items: center;
        margin-bottom: 1.5em;
        & p {
            padding-left: 1em;
            font-size: 1.2em;
            font-weight: 600;
        }
    }
    #action-button {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
    #action-button button {
        padding: 1.2em;
        margin-bottom: 1.5em;
    }
    #empty-cart {
        text-decoration: underline;
        font-size: .75em;
    }
    #no-content {
        text-align: center;
        margin: 1em 0;
        & a {
            color: white;
        }
        p {
            margin: 1em 0;
        }
    }
`

const StyledClientCartElement = styled.li`
    width: 100%;
    display: flex;
    justify-content: space-between;
    #image-container {
        width: 80px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: .5em;
    }
    .action-buttons {
        display: flex;
        justify-content: flex-end;
    }
    i {
        background: transparent;
        color: blue;
    }
`

const StyledClientProfile = styled.div`
        height: 92vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    h1 {
        margin: 1em 0;
        color: white;
    }
    #return-button {
        margin-top: .5em;
    }
    #return-container {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    #orders-container {
        display: block;
        overflow: auto;
        white-space: nowrap;
        & div {
            display: inline-block;
            margin: 0 .5em;
            border-radius: 25px;
        }
    }
    .order-element {
        text-align: center;
        & h4 {
            margin: 3em 2.5em;
        }
        h2 {
            margin-top: 1.5em;
        }
        button {
            margin-bottom: 1em;
        }
    }
    #pre-select-container {
        display: flex;
        justify-content: space-around;
    }
    .inside-container {
        width: 80vw;
        padding: 1em 0;
        border-radius: 25px;
    }
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 1.5em;
        font-weight: bold;
    }
    input {
        width: 85%;
        margin-bottom: 1em;
        border: none;
        border-radius: 5px;
        padding: 0.5em 0 .5em 1em;
        font-size: 16px;
        font-style: italic;
    }
    .submit {
        margin-top: 1em;
        background: transparent;
        border: 2px solid white;
        color: white;
        font-weight: bold;
    }
    .have-account {
        text-align: center;
        color: white;
    }
    .have-account a {
        color: white;
    }
    p {
        font-size: .5em;
        margin-top: 1em;
        text-decoration: underline;
    }
`
const StyledClientOrderDetails = styled.div`
    min-height: 92vh;
    display: grid;
    grid-template-columns: 90%;
    grid-template-areas: 
        "header"
        "mid"
        "bottom"
    ;
    grid-auto-rows: minmax(min-content, max-content);
    justify-content: center;
    gap: 50px;
    #header {
        grid-area: header;
    }
    #content {
        grid-area: bottom;
        padding: 1em;
        text-align: center;
        & div {
            margin: 1em 0;
        }   
    }
`


export  {
    StyledClientHome,
    StyledClientMenu,
    StyledClientNav,
    StyledClientCart,
    StyledClientProductList,
    StyledClientProductDetails,
    StyledClientSingleProduct,
    StyledClientCartElement,
    StyledClientProfile,
    StyledClientOrderDetails
}