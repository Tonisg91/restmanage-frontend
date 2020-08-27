import styled from 'styled-components'

const StyledClientHome = styled.div`
        height: 100vh;
        width: 100%;
        position: fixed;
        background-image: url('https://res.cloudinary.com/dkejgwlha/image/upload/v1597396527/RestManager/BeFunky-collage_3_fy8w03.jpg');
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        .title-container {
            width: 80%;
        }
        .title {
            color: white;
            text-align: center;
        }
        .button-container {
            padding-bottom: 2em;
        }
        .border {
            border: 2px dotted white;
            border-radius: 5px;
        }
        a {
            text-decoration: none;
            background: transparent;
            color: white;
            padding: .4em 3em;
            font-size: 1.2em;
            font-weight: bold;
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

const StyledClientProductDetails = styled.div`
    min-height: 100vh;
`



export  {
    StyledClientHome,
    StyledClientMenu,
    StyledClientNav,
    StyledClientProductList,
    StyledClientProductDetails,
    StyledClientSingleProduct
}