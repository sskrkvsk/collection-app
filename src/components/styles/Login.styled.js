import styled, { keyframes } from "styled-components";

// Login
const peachGradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const LoginStyle = styled.button`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  background: linear-gradient(
    90deg,
    #99acff,
    #fad0c4,
    #fad0c4,
    #7b3391
  );
  background-size: 400% 400%;
  animation: ${peachGradientAnimation} 15s ease infinite;

  div {
    display: flex;
    align-items: center;
    background-color: transparent;
    border-radius: 10px;
    padding: 40px;
    transition: box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0 0 30px rgba(255, 255, 255, 0.6);
    }

    img {
      width: 100px;
      padding: 0 10px;
      margin: 0;
    }

    p {
      font-size: ${({ theme }) => theme.typography.fontSizeH};
    }
  }
`;