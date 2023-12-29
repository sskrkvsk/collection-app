import styled from "styled-components";

// Input
export const InputStyle = styled.input`
    background-color: greenyellow;
    width: 30%;
    padding: 20px 10px;
    border-radius: ${({theme}) => theme.border.radius};
    font-size: ${({theme}) => theme.typography.fontSizeMb};
`