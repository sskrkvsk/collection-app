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
      background-color: transparent;
      margin: 0px;
    }

  /* IMAGE SECTION */
    header {
        margin-top: 100px;
        margin-left: 200px;
        padding: 10px;
        background-color: ${({theme}) => theme.colors.card};
        border-radius: ${({theme}) => theme.border.radius};
        margin-bottom: 40px;

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
        background-color: transparent;
        padding: 20px;
        padding-top: 0;
    }
  }

  footer {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    padding: 0 20px;


    button {
        padding: 20px 15px;
        border-radius: ${({theme}) => theme.border.radius};
        font-size: ${({theme}) => theme.typography.fontSizeMb};
    }

    button:nth-child(2):hover {
      background-color: ${({theme}) => theme.colors.red}
    }
  }
  @media (max-width: 1540px) {
  gap: 100px;
    header {
        margin-left: 50px;
    }
    div > span {
        input {
          width: 60px;
          text-align: center;
        }
    }
  }
    @media (max-width: 1200px) {
      gap: 50px;
      header {
        margin-left: 0px;
        & >input:first-child {
          width: 240px;
          max-height: 320px;
          margin-bottom: 10px;
        }
    }
    section {
      padding: 20px;
      width: 650px;
    }
    header > img {
        min-width: 240px;
        max-height: 420px;
    }
    }
    @media (max-width: 1000px) {
      section {
        h1 {
        margin-bottom: 30px;
        padding: 20px;
        padding-top: 0;
        font-size: 2rem;
        span {
            font-size: 1.4rem;
        }
        }  
      }
    }
    @media (max-width: 850px) {
      gap: 20px;
      width: 95%;
      flex-direction: column;
      align-items: center;
      section {
        display: flex;
        width: 100%;
        padding: 10px;
        flex-direction: column;
        margin-top: 10px;
        margin-bottom: 20px;
        & >input:first-child {
          margin-right: 0;
          margin-bottom: 10px;
        }
        div {
          margin-top: 10px;
        }
      }
      header {
        margin-top: 80px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        & >input:first-child {
          width: 100%;
          height: auto;
          margin-bottom: 10px;
        }
        > div {
          width: 100%;
          padding-top: 5px;
          justify-content: space-between;
    }
    }

    article {
      h2 {
        padding-left  :20px ;
        margin-bottom: 20px;
        font-size: 1.3rem;
      }
      p {
        padding: 5px;
      }
    }
      footer {
        padding: 0;
    }
    }
`;
