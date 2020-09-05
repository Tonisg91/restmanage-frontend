import styled from 'styled-components'

// const StyledClientHome = styled.div`
//         height: 100vh;
//         width: 100%;
//         position: fixed;
//         background-image: url('https://res.cloudinary.com/dkejgwlha/image/upload/v1597396527/RestManager/BeFunky-collage_3_fy8w03.jpg');
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         justify-content: space-around;
//         .title-container {
//             width: 80%;
//         }
//         .title {
//             color: white;
//             text-align: center;
//         }
//         .button-container {
//             padding-bottom: 2em;
//         }
//         .border {
//             border: 2px dotted white;
//             border-radius: 5px;
//         }
//         a {
//             text-decoration: none;
//             background: transparent;
//             color: white;
//             padding: .4em 3em;
//             font-size: 1.2em;
//             font-weight: bold;
//         }
//     `

const StyledClientHome = styled.div`
        #logo-box {
            height: 100px;
            width: 100px;
            background-image: url("https://res.cloudinary.com/dkejgwlha/image/upload/v1599309212/RestManager/Logo_qmgumf.png");
            background-repeat: no-repeat;
            background-size: contain;
        }
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 50px;
            padding-top: 1em;
        }
        nav i {
            font-size: 30px;
            margin-right: 1em;
        }
        #sec-1-img {
            height: 300px;
            background-image: url("https://res.cloudinary.com/dkejgwlha/image/upload/v1599309212/RestManager/Logo_qmgumf.png");
            background-repeat: no-repeat;
            background-size: contain;
        }
    `



const StyledClientMenu = styled.div`
        display: grid;
        grid-auto-flow: columns;
        grid-template-columns: repeat(auto-fill, 300px);
        gap: 25px;
        justify-content: center;
        padding: 2em 0 5em;
        .food-container {
            justify-content:center;
            text-align: center;
            background-color: var(--red);
            padding: 1em 0 0 0;
            box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.10);
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
            color: black;
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
        background: var(--navbar);  
        border-radius: 10px 10px 0 0;
        .nav-element {
            text-align: center;
            color: var(--background-color)
        }
        p {
            font-size: 0.8em;
        }
        i {
            font-size: 1.4em;
            padding: 0.5em;
            width: 50px;
            text-align: center;
        }
        .active i , .active p{
            color: var(--selected);
        }
    `

const StyledClientProductList = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
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

    #image-container {
        width: 90%;
        height: 45vh;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        margin: 2.5em 0;
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
            font-size: 1.2em;
            font-weight: 600;
        }
    }

    @media (min-width: 768px) {
        #image-container {
            background-size: contain;
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
    justify-content: center;
    grid-row-gap: 40px;
    
    #title {
        grid-area: header;
        display: flex;
        justify-content: center;
        & h1 {
            padding-top: 1em;
        }
    }

    #no-content {
        grid-area: mid;
        text-align: center;
        & p {
            margin: 1em 0;
            font-size: 1.1em;
        }
        a {
            text-decoration: none;
            color: white;
        }

    }

    #cart-container {
        grid-area: mid;
        max-height: 100%;
        overflow: scroll;
    }

    #action-container {
        grid-area: bottom;
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
    #action-buttons {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
    #action-buttons button {
        padding: 1.2em;
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


export  {
    StyledClientHome,
    StyledClientMenu,
    StyledClientNav,
    StyledClientCart,
    StyledClientProductList,
    StyledClientProductDetails,
    StyledClientSingleProduct,
    StyledClientCartElement
}