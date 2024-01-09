import styled from 'styled-components';

export const SingleItemStyled = styled.div`
  width: 87.5%;
  min-height: 100vh;
  background-color: ${({theme}) => theme.colors.body};
  margin: 0 auto;
  text-align: center;
  display: flex;
  gap: 150px;

  input, textarea {font-family: 'Lato', sans-serif;
      font-size: ${({theme}) => theme.typography.fontSizeMb};
  }

  p {
      margin: 0px;
    }

  /* IMAGE SECTION */
    header {
        margin-top: 100px;
        margin-left: 200px;

        & >input:first-child {
          width: 300px;
          height: 470px;
          margin-bottom: 10px;
        }
    }

    header > img {
        width: 300px;
        height: 470px;
        display: flex;
        flex-direction: row;
        object-fit: cover;
        border-radius: ${({theme}) => theme.border.radius};
        box-shadow: ${({theme}) => theme.shadows.material};
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
    background-color: ${({theme}) => theme.colors.card};
    border-radius: ${({theme}) => theme.border.radius};
    margin-top: 100px;
    margin-bottom: 40px;
    padding: 60px;
    width: 690px;
    text-align: left;
    
    & >input:first-child {
      margin-right: 20px;
    }
    
    h1, h2 {
        margin: 0;
    }

    h1 {
        margin-bottom: 80px;
        padding: 20px;
        padding-top: 0;
        font-size: 2.6rem;
        /* background-color: white; */
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
    margin-top: 20px;

    textarea {
        background-color: #fff;
        padding: 10px 5px;
        padding-left: 10px;
        border: none;
        border-radius: ${({theme}) => theme.border.radius};
        resize: none;
        flex: 1,
    }
  }

  article {
    h2 {
        margin-bottom: 30px;
        /* background-color: azure; */
    }

    p {
        /* background-color: wheat; */
        padding: 20px;
        padding-top: 0;
    }
  }

  footer {
    display: flex;
    justify-content: space-between;
    /* gap: 20px; */
    margin-top: 20px;


    button {
        padding: 20px 15px;
        border-radius: ${({theme}) => theme.border.radius};
        font-size: ${({theme}) => theme.typography.fontSizeMb};
    }

    button:nth-child(2):hover {
      background-color: ${({theme}) => theme.colors.red}
    }
  }
`;
