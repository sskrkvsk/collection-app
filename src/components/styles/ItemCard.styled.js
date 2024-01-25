import styled from "styled-components";

export const ItemsCardStyle = styled.div`
    section {
        position: relative;
        display: flex;
        border-radius: ${({theme}) => theme.border.radius};
        box-shadow: ${({theme}) => theme.shadows.material};
        background-color: white;
        padding: 5px;
        width: 100%; 
        color: black;
        overflow: hidden;
        &:hover {
        &:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.1);
            z-index: 1;
        }}}

    img {
        height: 300px;
        width: 200px;
        object-fit: cover;
        border-radius: ${({theme}) => theme.border.radius};
    }

    div {
        margin-top: 10px;
        width: 200px;
        padding-left: 20px;
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
        display: ${(props) => props.articleVisibility || 'block'};;
        background-color: ${({theme}) => theme.colors.card};
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

    @media (max-width: 900px) {
        img {
        height: 250px;
        width: 180px;
    }
    h3 {
        font-size: ${({theme}) => theme.typography.fontSizeMb};
    }}

    @media (max-width: 670px) {
        section {
            width: 370px
        }
        h3 {
            font-size: ${({theme}) => theme.typography.fontSizeM}
        }}
    `