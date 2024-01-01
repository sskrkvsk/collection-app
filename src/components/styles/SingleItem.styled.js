import styled from 'styled-components';

export const SingleItemStyled = styled.div`
  width: 87.5%;
  min-height: calc(100vh - ${({ theme }) => theme.height.headerHight});
  background-color: gray;
  margin: 0 auto;
  text-align: center;
  display: flex;
  gap: 150px;

  p {
      margin: 0px;
    }

  /* IMAGE SECTION */
    header {
        margin-top: 100px;
        margin-left: 100px;
    }

    header > img {
        width: 300px;
        display: flex;
        flex-direction: row;
    }

    header > div {
      margin-top: 5px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    div > span {
        display: flex;
    }

    span > img {
        margin-top: 3px;
        width: 16px;
    }


/* Blog Section */
  section {
    margin-top: 100px;
    width: 630px;
    text-align: left;
    
    h1, h2 {
        margin: 0;
    }

    h1 {
        margin-bottom: 80px;
        padding: 20px;
        padding-top: 0;
        font-size: 2.6rem;
        background-color: white;
        text-transform: capitalize;

        span {
            font-size: 1.8rem;
            margin-left: 10px;
        }
    } 
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;

    textarea {
        padding: 10px 5px;
        border-radius: ${({theme}) => theme.border.radius};
        resize: none;
        flex: 1
    }

    input {
        padding: 15px;
        border-radius: ${({theme}) => theme.border.radius};
    }
  }

  article {
    h2 {
        margin-bottom: 30px;
    }

    p {
        background-color: wheat;
        padding: 20px;
        padding-top: 0;
    }
  }

  footer {
    display: flex;
    gap: 20px;
    margin-top: 20px;


    button {
        padding: 20px 15px;
        border-radius: ${({theme}) => theme.border.radius};
        font-size: ${({theme}) => theme.typography.fontSizeMb};
    }
  }
`;
