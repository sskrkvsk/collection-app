import styled from "styled-components";

// Add custom item
export const AddCustomItemStyle = styled.div`
    background-color: antiquewhite;
    width: 100%;
    height: calc(100vh - ${({theme}) => theme.height.headerHight});
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;


    section {
        margin: 0 auto;
        width: 30%;
        input {
            width: 100%;
        }

        label {
            margin-left: 5px;
        }

       > ul {
        /* align-self: center; */
        padding: 0;
        margin-bottom: 0;
        margin-left: 15px;
        display: flex;
        /* width: 150px; */
        gap: 39px;
    }
    }

    

`