import { createGlobalStyle } from "styled-components";
import VisbyMedium from "../../fonts/VisbyMedium.woff";
import VisbyBold from "../../fonts/VisbyBold.woff";
import VisbySemibold from "../../fonts/VisbySemibold.woff";
import VisbyHeavy from "../../fonts/VisbyHeavy.woff";
import VisbyRegular from "../../fonts/VisbyRegular.woff";

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: "Visby Medium";
    src: url(${VisbyMedium}) format("woff");
  }

  @font-face {
    font-family: "Visby Bold";
    src: url(${VisbyBold}) format("woff");
  }

  @font-face {
    font-family: "Visby Semibold";
    src: url(${VisbySemibold}) format("woff");
  }

  @font-face {
    font-family: "Visby Heavy";
    src: url(${VisbyHeavy}) format("woff");
  }

  @font-face {
    font-family: "Visby Regular";
    src: url(${VisbyRegular}) format("woff");
  }

  * {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
    font-family: 'Visby Medium', sans-serif;
    scroll-behavior: smooth;
    font-weight: normal;
    
  }

  body {
    background: ${({
      theme,
    }: {
      theme: { colors: { background: Record<string, string> } };
    }) => theme.colors.background};
    width: 100vw;
    height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-y: hidden;
  }
  
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    transition: all 0.2s ease-in;
  }

  ::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 10px;
    transition: all 0.2s ease-in;

  }

  button {
    cursor: pointer;
    
    &:disabled {
    cursor: not-allowed;
    background-color: #c6c6c6;
    color: #ffffff;
    border: none;

      &:hover {
        background-color: #c6c6c6;
      }

      &:active {
        background-color: #c6c6c6;
      }
    }
  }

  button, input {
    outline: 0;
  }
  
  h1, h2, h3, h4, h5, h6 {
    color: #575757;
    font-weight: bold;
  }

  h1 {
    font-size: 1.375rem;
  }

  h2 {
    font-size: 20px;
  }

  h5 {
    font-size: 14px;
  }

  small {
    color: #575757;
    font-size: 0.65rem;
    font-weight: 400;
  }

  input[type=password]::-ms-clear{
    display: none;
  }

  input[type=password]::-ms-reveal{
    display: none;
  }
`;
