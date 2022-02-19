import { createGlobalStyle } from 'styled-components'

import Montserrat from "./fonts/Montserrat.ttf";
import MontserratItalic from "./fonts/Montserrat-Italic.ttf";

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: "Montserrat";
    src: local('Montserrat'), local('Montserrat'),
    url(${Montserrat}) format("truetype");
    url(${MontserratItalic}) format("truetype");
    font-weight: 300;
    font-style: normal;
  }
`

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0 auto;
    padding: 0;
    font-size: 16px;
    width: 100%;
    height: 100%;
    font-family: "Montserrat", sans-serif;
    line-height: 1.15;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  h1,h2,h3,h4,h5,p,a,ul,li {
    margin: 0;
    padding: 0;
  }
  
  a {
    text-decoration: none;
  }

  article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
    display: block;
  }

  button {
    border: none;
    background: none;
  }
`