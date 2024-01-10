import styled from "styled-components";

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

    @media (max-width: 1300px) {
        input, section {
            width: 40%;
        }
    }
    @media (max-width: 1000px) {
        input, section {
            width: 60%;
        }
    }
    @media (max-width: 650px) {
        input, section {
            width: 80%;
        }
    }
    @media (max-width: 480px) {
        input, section {
            width: 90%;
        }
    }
`