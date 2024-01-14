import styled from "styled-components";

export const PageStyle = styled.section`
background-color: ${({theme}) => theme.colors.body};
display: flex;
flex-direction: column;
align-items: center;
`
export const NoItemsPage = styled.footer`
    height: calc(95vh - ${({theme}) => theme.height.both});
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
`