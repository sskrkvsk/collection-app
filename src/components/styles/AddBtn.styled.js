import styled from "styled-components";

// Add button
export const AddBtnStyle = styled.button`
    margin-top: 40px;
    width: 30%;
    padding: 20px 0;
    border-radius: ${({theme}) => theme.border.radius};
    font-size: ${({theme}) => theme.typography.fontSizeMb};
`