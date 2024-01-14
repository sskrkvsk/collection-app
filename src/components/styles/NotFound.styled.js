import styled from "styled-components";

export const NotFoundStyle = styled.div`
    background-color: ${({theme}) => theme.colors.body};
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        margin-bottom: 0;
        font-size: 20rem;
    }

    p {
        margin-top: 0;
        font-size: 2rem;
    }
`