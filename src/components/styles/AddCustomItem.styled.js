import styled from "styled-components";

export const AddCustomItemStyle = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    

    section {
        margin: 0 auto;
        width: 30%;
        label {
            margin-left: 5px;
        }

        > div {
            display: flex;
            gap: 10px;
            margin-top: 5px;

            p {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 70px;
                background-color: ${({theme}) => theme.colors.card};
                border-radius: ${({theme}) => theme.border.radius};
                font-size: ${({theme}) => theme.typography.fontSizeMb};
            }}}

    input {
            width: 30%;
        }

    input[type="range"] {
        width: 100%;
        padding: 20px 10px;
        background: ${({theme}) => theme.colors.gradient};
        box-shadow: ${({theme}) => theme.shadows.input};
        border-radius: ${({theme}) => theme.border.radius};
        -webkit-appearance: none;
        appearance: none;
        cursor: pointer;
    }

    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        height: 25px;
        width: 15px;    
        border-radius: ${({theme}) => theme.border.radius};
        background-color: black;
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
        gap: 30px;
        input, section {
            width: 90%;
        }

        input[type="range"] {
            padding: 15px 10px;
        }
    }
`