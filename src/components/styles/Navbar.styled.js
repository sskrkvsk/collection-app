import styled from "styled-components";

// Nav bar
export const NavbarStyle = styled.div`
    position: fixed;
    top: calc(${({theme}) => theme.height.headerHight});
    background-color: yellow;
    right: 0;

    span {
        margin-top: 10px;
        margin-left: 10px;
        padding: 10px 15px;
    }
`