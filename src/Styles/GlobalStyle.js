import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
}

  .App {
  text-align: center;
  
  h1, h2 {
    margin: 1em;
    font-family: 'Lobster', cursive;
    font-weight: 200;
  }
}

#map {
    height: 100%;
  }

a:active {
          font-weight: bold;
        }
`;

export default GlobalStyle;