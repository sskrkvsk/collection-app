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
            max-height: 290px;
            border-radius: ${({theme}) => theme.border.radius};
            font-size: ${({theme}) => theme.typography.fontSizeM};
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            box-shadow: ${({theme}) => theme.shadows.material};
            background-color: ${({theme}) => theme.colors.card};
            &:active {
                box-shadow: ${({theme}) => theme.shadows.input};
            }
        }     

        a {
            color: white;
            width: 100%;
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            background-image: url('/images/no-bg-logo.png');
            background-repeat: no-repeat;
            background-size: 150px; 
            background-position: center center; 
            transition: ${({theme}) => theme.transition.fast};
            
            &:hover {
            background-size: 200px; 
            }
        }

        nav {
            width: 100%;
            display: flex;
            justify-self: center;

            button {
                background-color: transparent;
                text-transform: uppercase;
                font-weight: 600;
                flex: 1;
                padding: 10px 0;
                cursor: pointer;
                justify-self: end;
                transition: ${({theme}) => theme.transition.fast};
            }
        }

        input {
            position: relative;
            top: 105px;
            text-align: center;
            background-color: white;
            color: black;
            font-size: ${({theme}) => theme.typography.fontSizeM};
            border-radius: ${({theme}) => theme.border.radius};
            width: 90%;
            box-shadow: ${({theme}) => theme.shadows.input};
        }

        p {
            width: 100%;
            margin: 0;
            color: transparent;
            background-color: transparent;
            
        }

        button:first-child {
            border-bottom-left-radius: 10px;
            padding: 10px 0;
            border-right: 1px solid #d7d7d7;

            &:hover {
                background-color: ${({theme}) => theme.colors.blue}
            }
            &:active {
                box-shadow: ${({theme}) => theme.shadows.input};
            }
        }

        button:nth-child(2) {
            border-bottom-right-radius: 10px;
            padding: 10px 0;

            &:hover {
                background-color: ${({theme}) => theme.colors.red}
            }
            &:active {
                box-shadow: ${({theme}) => theme.shadows.input};
            }
        }
    }
    

    &:nth-child(2) {
        display: flex;
        align-items: start;
    }


    @media (max-width: ${({theme}) => theme.breakpoints.large}) {
        &>a {
            margin-bottom: 20px;
        }

        section {
            grid-template-columns: 1fr;
        }

        section >div {
            height: 200px;
            flex-direction: row;
            justify-content: space-between;
            /* align-items: center; */
            /* justify-content: center; */

            p {
            width: 0px;
            margin: 0;
            
        }
        } 

        a {
            height: 100%;
        }

        nav {
            height: 100%;
            max-width: 100px;
            flex-direction: column;
        }

        button:first-child {
           border-right: none;
           border-bottom: 3px solid #d7d7d7;
        }
    }

    @media (max-width: ${({theme}) => theme.breakpoints.small}) {
            width: 95%;
    }
`