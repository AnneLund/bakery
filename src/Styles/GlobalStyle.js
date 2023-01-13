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

button {
    border: none;
    background-color: #15568495;
    color: white;
    padding: 1em;
    font-size: 1em;
    cursor: pointer;
    &:hover {
      background-color: #155684;
    }
  }
`;

export default GlobalStyle;