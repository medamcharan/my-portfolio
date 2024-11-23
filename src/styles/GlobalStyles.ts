import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg, 
      rgba(0, 0, 0, 1) 50%,          /* Solid black at the top */
      rgba(79, 44, 122, 0.8) 100%   /* Elegant plum at the bottom */
    );
    color: #fff;
  }
`;

export default GlobalStyles;
