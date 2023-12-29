import styled from "styled-components";

// Not Found
export const NotFoundStyle = styled.div`
    background-color: antiquewhite;
    width: 100%;
    height: calc(100vh - ${({theme}) => theme.height.headerHight});
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */

    h1 {
        margin-bottom: 0;
        font-size: 20rem;
    }

    p {
        margin-top: 0;
        font-size: 2rem;
    }

`