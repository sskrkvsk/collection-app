import styled from "styled-components";

// Add custom item
export const AddItemStyle = styled.div`
    background-color: antiquewhite;
    width: 100%;
    height: calc(100vh - ${({theme}) => theme.height.headerHight});
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;

    section {
        width: 30%;
        display: flex;
        justify-content: space-between;
        gap: 40px;
        margin-bottom: 100px;
    }
`