import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Poppins, sans-serif;
    }

    body {
        color: #e1e1e6;
        background: #121214;
        font-size: 1rem;
    }
`;
