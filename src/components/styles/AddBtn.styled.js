import styled from "styled-components";

// Add button
export const AddBtnStyle = styled.button`
    background-color: aqua;
    /* margin-top: 40px; */
    min-width: 150px;
    padding: 20px 20px;
    border-radius: ${({theme}) => theme.border.radius};
    font-size: ${({theme}) => theme.typography.fontSizeMb};
`