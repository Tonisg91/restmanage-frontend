import styled from 'styled-components'

const StyledClientHome = styled.main`
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




export {
    StyledClientHome
}