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

const StyledClientMenu = styled.div`
        width: 100%;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 15px;
        justify-items: center;
        padding: 2em 0 3.5em;
        .food-container {
            width: 90%;
            text-align: center;
            background: #FF416C;  /* fallback for old browsers */
            background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);  /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to right, #FF4B2B, #FF416C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            padding: 1em 0 0 0;
            box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.10);
        }
        .food-image {
            width: 100%;
            height: 120px;
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



export  {
    StyledClientHome,
    StyledClientMenu
}