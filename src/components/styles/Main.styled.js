import styled from "styled-components";

// Main
export const MainStyle = styled.main`
    min-width: ${({theme}) => theme.size.main};
    min-height: calc(100vh - ${({theme}) => theme.height.header});
    padding-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;


    section {
        flex: 1;
        width: 100%;
        margin-bottom: 40px;

        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 30px;
        

        div {
        width: 100%;
        height: 100%;
        border-radius: ${({theme}) => theme.border.radius};
        font-size: ${({theme}) => theme.typography.fontSizeM};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-shadow: ${({theme}) => theme.shadows.medium};

        }     

        a {
            color: white;
            width: 100%;
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            background-image: url('./images/no-bg-logo.png');
            background-repeat: no-repeat;
            background-size: contain; 
            background-position: center center; 
        }

        nav {
            width: 100%;
            display: flex;

            button {
                background-color: transparent;
                text-transform: uppercase;
                font-weight: 600;
                flex: 1;
                /* height: 30px; */
                cursor: pointer;
                justify-self: end;
            }
        }

        p {
            width: 100%;
            margin: 0;
            color: transparent;
            background-color: transparent;
            
        }

        button:first-child {
            border-bottom-left-radius: 10px;
            padding-bottom: 10px;
        }

        button:nth-child(2) {
            border-bottom-right-radius: 10px;
            padding-bottom: 10px;
        }
    }

    &:nth-child(2) {
        display: flex;
        align-items: start;
    }
`