import styled from "styled-components";

// Items Grid
export const ItemsGridStyle = styled.div`
    width: ${({theme}) => theme.size.grid};
    margin: 0 auto;
    padding: 30px;
    display: grid;
    grid-template-columns: ${(props) => props.gridColumns || 'repeat(3, 1fr)'};
    gap: 30px;
    place-items: center;
    background-color: ${({theme}) => theme.colors.header};;
    `