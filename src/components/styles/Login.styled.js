import styled from "styled-components";

// Login
export const LoginStyle = styled.button`
    background-color: antiquewhite;
    width: 100%;
    height: 100vh;
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    gap: 100px;

    div {
    display: flex;
    align-items: center;
    background-color: transparent;

    img {
        width: 100px;
        padding: 0 10px;
        margin: 0;
    }

    p {
        font-size: ${({theme}) => theme.typography.fontSizeH};
    }
    }
`