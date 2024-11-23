import React from 'react';
import styled, { keyframes } from 'styled-components';

// Fonts Import
const GlobalStyles = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@400;600&family=Poppins:wght@100;500;600;800;900&family=Lobster+Two:ital,wght@0,400;0,700;1,400&display=swap');
`;

// Global Variables
const colors = {
  white: '#fff',
  black: '#000',
  primaryLight: '#f9fafb',
  secondaryLight: '#f0f0f0',
  thirdLight: '#DADBDB',
  primaryDark: '#222',
  secondaryGrey: '#4f4f4f',
  firstShadow: 'rgba(0,0,0,0.3)',
  success: 'rgba(61, 168, 102, 0.6)',
  error: 'rgba(168, 30, 14, 0.6)',
  primaryColor: '#5c5fc4',
  secondaryColor: '#c4c15c',
};



// Keyframes for Animation
const animate = keyframes`
  0% {
    transform: perspective(500px) rotateX(0deg) rotate(5deg);
  }
  100% {
    transform: perspective(50px) rotateX(360deg) rotate(5deg);
  }
`;

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  overflow: hidden;
  min-height: 40vh;
`;

const Box = styled.div`
  transform-style: preserve-3d;
  animation: ${animate} 7s ease-in-out infinite alternate;

  span {
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.5) 90%,
      transparent
    );
    text-transform: uppercase;
    line-height: 0.76em;
    position: absolute;
    color: ${colors.white};
    font-size: 3.5em;
    white-space: nowrap;
    font-weight: bold;
    padding: 0px 10px;
    transform-style: preserve-3d;
    text-shadow: 0 10px 15px ${colors.firstShadow};
    transform: translate(-50%, -50%)
      rotateX(calc(var(--i) * 22.5deg)) translateZ(109px);

    i {
      font-style: initial;

      &:nth-child(1) {
        color: ${colors.primaryColor};
      }

      &:nth-child(2) {
        color: ${colors.secondaryColor};
      }
    }
  }
`;

const App: React.FC = () => {
  return (
    <GlobalStyles>
      <Container>
        <Box>
          {Array.from({ length: 16 }, (_, i) => (
            <span key={i} style={{ '--i': i + 1 } as React.CSSProperties}>
              <i>SK</i> IL <i>LS</i>
            </span>
          ))}
        </Box>
      </Container>
    </GlobalStyles>
  );
};

export default App;
