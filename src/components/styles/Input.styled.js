import styled from "styled-components";

export const InputStyle = styled.input`
    background-color: #fff;
    padding: 20px 10px;
    border-radius: ${({theme}) => theme.border.radius};
    font-size: ${({theme}) => theme.typography.fontSizeMb};
    box-shadow: ${({theme}) => theme.shadows.input};
`