import styled from 'styled-components'

const StyledLoginSignup = styled.div`
            height: 92vh;
            display: flex;
            flex-direction: column;
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
            padding: .5em;
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

const StyledGenericList = styled.ul `
    width: 100%;
    border-radius: 5px;
    border: 2px solid lightgray;
    list-style: none;
    li:nth-child(even) {
        background-color: lightgray;
    }
`

const StyledNoMatch = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
        color: white;
    }
    button {
        margin-top: 2em;
        padding: 1.3em .8em;
        text-decoration: none;
        font-weight: 600;
    }
`

const StyledLoadingPage = styled.div`
    position: absolute;
    background-color: white;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 100%
    }
`



export {
    StyledLoginSignup,
    StyledGenericList,
    StyledNoMatch,
    StyledLoadingPage
}