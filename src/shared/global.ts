import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: Arial, Helvetica, sans-serif;
        background-color: ${props => props.theme.colors.bgColor};
        color: ${props => props.theme.colors.text};
        width: 100vw;
        overflow-x: hidden;
    }
`

export default GlobalStyle;
