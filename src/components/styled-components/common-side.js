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

const StyledGenericList = styled.ul `
    width: 100%;
    border-radius: 5px;
    border: 2px solid lightgray;
    list-style: none;
    li:nth-child(even) {
        background-color: lightgray;
    }
`

const StyledProfile = styled.div`
        height: 92vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    h1 {
        margin: 1em 0;
    }
    .inside-container {
        width: 80vw;
        padding: 2em 0;
        
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

export {
    StyledLoginSignup,
    StyledGenericList,
    StyledProfile
}