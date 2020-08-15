import styled from 'styled-components'

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

export {
    StyledLoginSignup
}