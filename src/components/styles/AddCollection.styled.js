import styled from "styled-components";

// Add collection
export const AddCollectionStyle = styled.button`
    width: 100%;
    height: 100vh;
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: center;
    gap: 50px;

    input {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        margin-bottom: 100px;
        width: 30%;
    }

    button {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        margin-bottom: 100px;
    }

`