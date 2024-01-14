import styled from "styled-components";

export const AddCollectionStyle = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
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

    @media (max-width: ${({theme}) => theme.breakpoints.large}) {
        input {
            width: 50%;
        }
    }
    @media (max-width: ${({theme}) => theme.breakpoints.medium}) {
        flex-direction: column;
        justify-content: start;
        gap: 20px;
        padding-top: 300px;
        input {
            width: 90%;
            margin-bottom: 0;
        }
        input, button {
            border-radius: ${({theme}) => theme.border.radius};
        }
    }
`