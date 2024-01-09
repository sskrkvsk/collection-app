import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsVisible(scrollTop > 200);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledButton onClick={scrollToTop} style={{ display: isVisible ? 'block' : 'none' }}>
      <img src='/images/up.svg' alt=''></img>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  cursor: pointer;
  display: none;

    border-radius: ${({theme}) => theme.border.radius};
    font-size: ${({theme}) => theme.typography.fontSizeMb};
    background-color: ${({theme}) => theme.colors.blue};
    box-shadow: ${({theme}) => theme.shadows.material};
    transition: ${({theme}) => theme.transition.fast};

    &:hover {
        background-color: ${({theme}) => theme.colors.blue}
    }

    &:active {
        box-shadow: ${({theme}) => theme.shadows.input};
    }
`;

export default ScrollToTopButton;
