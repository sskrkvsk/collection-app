import styled from "styled-components";

// TopBar
export const TopBarStyle = styled.ul`
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
`