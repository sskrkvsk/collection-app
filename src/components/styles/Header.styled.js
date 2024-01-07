import styled from "styled-components";

// HEADER
export const HeaderStyle = styled.div`
    position: fixed;
    width: 100%;
    height: ${({theme}) => theme.height.headerHight};
    display: flex;
    justify-content: space-between;
    background-color: ${({theme}) => theme.colors.header};
    z-index: 1000;
`

// LOGO
export const LogoStyle = styled.div`
    margin-left: 10px;
    display: flex;
    align-items: center;
    background-color: transparent;
    height: 100%;


    img {
        width: 43px;
        padding: 0 2px;
        margin: 0;
    }

    p {
        font-size: ${({theme}) => theme.typography.fontSizeM};
    }
`
// SEARCH
export const SearchStyle = styled.div`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-self: center;
    

    img {
        width: 30px;
    }

    div {
        display: flex;
        /* align-items: center; */
        margin-right: 10px;
    }

    input, button {
        padding: 11px;
        border-radius: ${({theme}) => theme.border.radius};
    }

    input {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    button {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`