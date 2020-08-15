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
        background: var(--navbar);  /* fallback for old browsers */
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

const StyledLoginSignup = styled.div`
            height: 92vh;
            display: flex;
            justify-content: center;
            align-items: center;
        .inside-container {
            width: 80vw;
            padding: 2em 0;
            background-color: var(--navbar);
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
            padding: 0.5em 0;
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
    `


export  {
    StyledClientHome,
    StyledClientMenu,
    StyledClientNav,
    StyledLoginSignup
}