import styled from "styled-components";

// Card
export const ItemsCardStyle = styled.div`
    display: flex;
    border-radius: ${({theme}) => theme.border.radius};
    background-color: white;
    padding: 5px;

    img {
        height: 300px;
        width: 200px;
        object-fit: cover;
        border-radius: ${({theme}) => theme.border.radius};
    }

    div {
        margin-top: 10px;
        width: 300px;
        margin-left: 10px;
    }

    h3 {
        margin: 0;  
        margin-bottom : 3px;
    }

    p {
        margin: 0;
        margin-bottom : 10px;
    }

    span{
        color: #6F7378;
    }

    span>img {
        padding-top: 3px;
        width: 16px;
        height: 16px;
    }
    `