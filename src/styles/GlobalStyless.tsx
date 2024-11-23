import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background: radial-gradient(circle, 
      rgba(79, 44, 122, 0.8) 0%,          /* Solid black at the center */
        rgba(0, 0, 0, 1)70%   /* Elegant plum at the outer edges */
    );
    color: #fff;
  }
`;

export default GlobalStyles;
