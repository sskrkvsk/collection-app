import styled from "styled-components";

// Items Grid
export const ItemsGridStyle = styled.div`
    width: ${({theme}) => theme.size.grid};
    margin: auto;
    margin-top: 20px;
    padding: 30px;
    padding-top: 0;
    display: grid;
    grid-template-columns: ${(props) => props.gridColumns || 'repeat(3, 1fr)'};
    gap: 30px;
    place-items: center;
    background-color: ${({theme}) => theme.colors.body};;
    `