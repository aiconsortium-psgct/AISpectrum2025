import { createGlobalStyle } from 'styled-components';

export const colors = {
  white: 'rgb(255, 255, 255)',
  blue: '#0d58a9',
  yellow: '#D9A353',
};

export const typography = {
  heading: {
    fontFamily: '"DM Serif Display", serif',
    fontWeight: 'bold',
  },
  body: {
    fontFamily: '"Domine", serif',
  },
};

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Domine:wght@400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${typography.body.fontFamily};
    color: ${colors.white};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${typography.heading.fontFamily};
    font-weight: ${typography.heading.fontWeight};
  }
`; 