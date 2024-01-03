import styled from "styled-components";

// Card
export const ItemsCardStyle = styled.div`
    display: flex;
    border-radius: ${({theme}) => theme.border.radius};
    background-color: white;
    padding: 5px;
    width: 100%;
    img {
        height: 300px;
        width: 200px;
        object-fit: cover;
        border-radius: ${({theme}) => theme.border.radius};
    }

    div {
        margin-top: 10px;
        width: 200px;
        margin-left: 10px;
    }

    h3 {
        margin: 0;  
        margin-bottom : 3px;
        text-transform: capitalize;
    }

    p {
        margin: 0;
        margin-bottom : 10px;
    }

    div>span{
        color: #6F7378;
    }

    span>img {
        padding-top: 3px;
        width: 16px;
        height: 16px;
    }

    article {
        display: ${(props) => props.articleVissbility || 'block'};;
        background-color: gray;
        padding: 20px 10px; 
        margin-left: 40px;
        width: 500px;
        height: 300px;
        border-radius: ${({theme}) => theme.border.radius};
        flex: 1;
        overflow: hidden;
        word-wrap: normal;
        text-overflow: ellipsis;
    }
    `