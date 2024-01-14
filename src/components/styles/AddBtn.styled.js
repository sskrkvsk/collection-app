import styled from "styled-components";

export const AddBtnStyle = styled.button`
    min-width: 150px;
    padding: 20px 20px;
    border-radius: ${({theme}) => theme.border.radius};
    font-size: ${({theme}) => theme.typography.fontSizeMb};
    background-color: ${({theme}) => theme.colors.card};
    box-shadow: ${({theme}) => theme.shadows.material};
    transition: ${({theme}) => theme.transition.fast};

    &:hover {
        background-color: ${({theme}) => theme.colors.blue}
    }

    &:active {
        box-shadow: ${({theme}) => theme.shadows.input};
    }
`