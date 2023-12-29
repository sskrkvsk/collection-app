import styled from "styled-components";

// Add collection
export const AddCollectionStyle = styled.button`
    background-color: antiquewhite;
    width: 100%;
    height: calc(100vh - ${({theme}) => theme.height.headerHight});
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    gap: 50px;

    input {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        margin-bottom: 100px;
    }

    button {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        margin-bottom: 100px;
    }

`