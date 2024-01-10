import styled from "styled-components";

// Items Grid
export const ItemsGridStyle = styled.div`
    width: ${({theme}) => theme.size.grid};
    margin: 0 auto;
    margin-top: 20px;
    padding: 30px;
    padding-top: 0;
    display: grid;
    grid-template-columns: ${(props) => props.gridColumns || 'repeat(3, 1fr)'};
    gap: 30px;
    place-items: center;
    background-color: ${({theme}) => theme.colors.body};;

    @media (max-width: 1530px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 1200px) {
        width: 100%;
    }
    @media (max-width: 670px) {
        width: 98%;
        padding: 0;
        grid-template-columns: 1fr;
        margin-bottom: 20px;
    }
    `