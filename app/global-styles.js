import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  html,
  body {
      background-color: #fff;
      color: #555;
      font-family: 'Lato', 'Arial', sans-serif;
      font-weight: 300;
      font-size: 20px;
      text-rendering: optimizeLegibility;
      overflow-x: hidden;
      height: 100%;
      width: 100%;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }
`;
