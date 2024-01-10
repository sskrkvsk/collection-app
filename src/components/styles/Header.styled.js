import styled from "styled-components";

// HEADER
export const HeaderStyle = styled.div`
    position: fixed;
    width: 100%;
    height: ${({theme}) => theme.height.header};
    display: flex;
    justify-content: space-between;
    background: ${({theme}) => theme.colors.gradient};
    z-index: 1000;

`

// LOGO
export const LogoStyle = styled.div`
    margin-left: 30px;
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
        background-color: transparent;
        color: black;
        font-size: ${({theme}) => theme.typography.fontSizeM};
    }

    @media (max-width: 670px) {
        margin-left: 5px;
        p {
        font-size: ${({theme}) => theme.typography.fontSizeMb};
        }
        img {
        margin-right: 5px;
    }
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
        margin-right: 10px;
    }

    input, button {
        padding: 11px;
        border-radius: ${({theme}) => theme.border.radius};
    }

    input {
        width: 250px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    button {
        width: 50px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        padding: 0;
    }

    span {
        padding: 5px 30px;
        margin-right: 30px;
        border-radius: ${({theme}) => theme.border.radius};
        box-shadow: ${({theme}) => theme.shadows.material};
        transition: ${({theme}) => theme.transition.fast};
        &:hover {
        background-color: ${({theme}) => theme.colors.body}
        }
        &:active {
        box-shadow: ${({theme}) => theme.shadows.input};
        }
    }

    @media (max-width: 670px) {
        input {
        width: 200px;
        }
        span {
            padding: 3px 20px;
            margin-right: 10px;
        }
    }
`