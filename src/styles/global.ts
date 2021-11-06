import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  --primary: #1DB954;
  --black: #000000;
  --blackLighter: #9E9E9E;
  --grayLight: #F5F5F5;
  --grayMedium: #e5e5e5; 
  --white: #FFFFFF;
  --frontEnd: #6BD1FF;
  --backEnd: #00C86F;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

html, body, #__next {
  height: 100%;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

a {
  margin-left: 16px;
  text-decoration: none;
  transition: opacity 0.3s ease 0s;
}
`;

export default GlobalStyles;
