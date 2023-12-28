import styled from "styled-components";

// TopBar
export const TopBartyle = styled.ul`
    background-color: beige;
    margin: 0 auto;
    width: ${({theme}) => theme.size.grid};
    display: flex;
    gap: 20px;

    li {
        padding: 5px 20px;
    }

    div {
        position: relative;
        display: flex;
        gap: 20px;
        margin-left: auto;
        margin-right: 20px;
    }

    span {
        display: flex;
        flex-direction: column;
        background-color: blue;
        position: absolute;
        top: 29px;
        left: 60px;
        width: 100px;
        border-radius: ${({theme}) => theme.border.radius};

        button {
            padding: 10px 0;
            background-color: transparent;
        }
    }
`