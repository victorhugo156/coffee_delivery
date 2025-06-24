
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{  
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a{
    text-decoration: none;
}
 

body{
    background: ${props=> props.theme.colors["background"]};
    color: ${props => props.theme.colors["base-subtitle"]} ;
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button{
    font-family: "Roboto", sans-serif;
    font-weight: ${props=> props.theme.fontWeights["regular"]};
    font-size: ${props=> props.theme.fontSizes["text-s"]};
}

`