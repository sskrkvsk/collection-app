import styled from "styled-components";

// Add custom item
export const AddItemStyle = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;

    section {
        width: 30%;
        display: flex;
        justify-content: space-between;
        gap: 40px;
        margin-bottom: 100px;
    }

    input {
        width: 30%;
    }
`