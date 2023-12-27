import styled from "styled-components";

// HEADER
export const HeaderStyle = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

`

// LOGO
export const LogoStyle = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: transparent;


    img {
        width: 50px;
        padding: 0;
        margin: 0;
    }

    p {
        font-size: ${(props) => props.theme.typography.fontSizeM};
    }
`
// SEARCH
export const SearchStyle = styled.div`
    background-color: transparent;
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: end;
    


`