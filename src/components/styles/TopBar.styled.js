import styled from "styled-components";

// TopBar
export const TopBarStyle = styled.ul`
    margin-top: calc(${({theme}) => theme.height.header} + 20px) ;
    height: ${({theme}) => theme.height.topbar};
    width: ${({theme}) => theme.size.grid};
    display: flex;
    gap: 20px;


    nav {
        height: 100%;
        width: 40%;
        /* background-color: green; */
        /* padding: 0; */
        align-self: flex-end;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
        cursor: pointer;

        img {
            padding: 0;
            /* height: 16px; */
        }

    }

    nav * {
        background-color: green;
        padding: 10px 30px;
        border-radius: ${({theme}) => theme.border.radius};
        flex: 1;
        text-align: center;
    }

    nav:first-child {
        padding: 1px;
    }

    div {
        background-color: transparent;
        width: 20%;
        position: relative;
        display: flex;
        align-items: center;
        gap: 20px;
        margin-left: auto;
        margin-right: 20px;
    }

    span {
        display: flex;
        flex-direction: column;
        gap: 10px;
        background-color: grey;
        position: absolute;
        top: -8px;
        right: -110px;
        width: 100px;
        border-radius: ${({theme}) => theme.border.radius};
        padding: 5px;
    }

    button {
        background-color: green;
        padding: 10px 30px;
        border-radius: ${({theme}) => theme.border.radius};
        flex: 1;
        }
`