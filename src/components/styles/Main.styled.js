import styled from "styled-components";

// Main
export const MainStyle = styled.div`
    width: ${({theme}) => theme.size.main};
    height: calc(100vh - ${({theme}) => theme.height.headerHight});
    margin: 0 auto;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    background-color: gray;
    text-align: center;
    align-items: center;
    gap: 30px;

    div {
        width: 50%;
        padding: 0;
        
    }

    div>button {
        width: 100%;
        padding: 20px 0;
        border-radius: ${({theme}) => theme.border.radius};
        font-size: ${({theme}) => theme.typography.fontSizeM};
    }
`