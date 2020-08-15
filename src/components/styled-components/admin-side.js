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
        transform: rotate(-90deg);
    }
    .sidenav {
        height: 100%;
        width: 0;
        position: fixed;
        z-index: 1;
        top: 0;
        right: 0;
        background-color: #111;
        overflow-x: hidden;
        transition: 0.5s;
        padding-top: 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
/*
        height: 100%;
        width: 0;
        position: fixed;
        z-index: 1;
        top: 0;
        right: 0;
        background-color: #111;
        overflow-x: hidden;
        transition: 0.5s;
        padding-top: 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
    
    a {
        padding: 0.5em;
        text-decoration: none;
        text-align: center;
        font-size: 25px;
        color: #818181;
        display: block;
        transition: 0.3s;
    }
    a:hover {
        color: #f1f1f1;
    }
    .closebtn {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 36px;
    }
    */
`

export {
    StyledAdminNav
}