import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration: none;
        color:inherit;
    }
    *{
        box-sizing: border-box;
    }
    body{
        padding-top: 75px;
        color: white;
        font-size:16px;
        background-color:rgba(20,20,20,1);
    }
`;

export default GlobalStyles;
