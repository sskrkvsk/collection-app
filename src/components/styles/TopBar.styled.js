import styled from "styled-components";

// TopBar
export const TopBarStyle = styled.div`
    margin-top: calc(${({theme}) => theme.height.header} + 20px) ;
    height: ${({theme}) => theme.height.topbar};
    width: ${({theme}) => theme.size.grid};
    display: flex;
    gap: 20px;


    nav {
        height: 100%;
        width: 40%;
        align-self: flex-end;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
        cursor: pointer;

        img {
            padding: 0;
            background-color: transparent;
        }

        &>a, &>p {
            box-shadow: ${({theme}) => theme.shadows.material};
            transition: ${({theme}) => theme.transition.fast};
            &:hover {
            background-color: ${({theme}) => theme.colors.blue}
        }

        &:active {
            box-shadow: ${({theme}) => theme.shadows.input};
        }
        }

    }

    nav * {
        background-color: ${({theme}) => theme.colors.card};
        padding: 10px 30px;
        border-radius: ${({theme}) => theme.border.radius};
        flex: 1;
        text-align: center;
    }

    nav:first-child {
        padding: 1px;
    }

    div {
        background-color: transparent;
        width: 20%;
        position: relative;
        display: flex;
        align-items: center;
        gap: 20px;
        margin-left: auto;
        margin-right: 20px;
    }

    span {
        display: flex;
        flex-direction: column;
        gap: 10px;
        position: absolute;
        top: -8px;
        right: -110px;
        width: 100px;
        border-radius: ${({theme}) => theme.border.radius};
        padding: 5px;
    }

    button {
        background-color: ${({theme}) => theme.colors.card};
        padding: 10px 30px;
        border-radius: ${({theme}) => theme.border.radius};
        flex: 1;
        box-shadow: ${({theme}) => theme.shadows.material};
        transition: ${({theme}) => theme.transition.fast};

        &:hover {
            background-color: ${({theme}) => theme.colors.blue}
        }

        &:active {
            box-shadow: ${({theme}) => theme.shadows.input};
        }
        }

        @media (max-width: 1530px) {
            justify-content:space-evenly;
        div {
            width: 20%;
            display: flex;
            gap: 15px;
            margin-left: 0;
            margin-right: 0;
    }
        div >button:first-child {
            display: none;
        }

        button {
            max-width: 150px;
            min-width: 100px;
        }

        span {
            height: 40px;

        flex-direction: row;
        gap: 20px;
        position: static;
        padding: 0;

        &button {
            height: 100px;
        }
    }}

    @media (max-width: 1000px) {
        width: 98%;
        padding-bottom: 10px;

        nav {
            width: 50%;
            gap: 5px;
        }

        nav >* {
            min-width: 100px;
        }

        div {
            width: 50%;
        }}

    @media (max-width: 823px) {
        justify-content:left;
        gap: 5px;
        div {
            width: 20%;
    }
        button {
            min-width: 60px;
            padding: 10px 0;
        }

        nav {
            margin-left: 15px;
        }

        nav >* {
            padding: 10px 0;
            min-width: 60px;
        }

        span {
            gap: 10px;

            &button {
            height: 100px;
        }}

    }
    @media (max-width: 670px) {
        gap: 10px;
        button {
            min-width: 50px;
        }
        div {
            gap: 10px
        }
        nav {
            margin-left: 5px;
        }
        nav >* {
            min-width: 50px;
        }
        span {
            gap: 5px;
        }
    }
`