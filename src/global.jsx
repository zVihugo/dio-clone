import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }
    body{
        background-color: #1E192C;
        color: #ffff;
    }

    // <uniquifier>: Use a unique and descriptive class name
    // <weight>: Use a value from 300 to 800

    .open-sans-<uniquifier> {
    font-family: "Open Sans", sans-serif;
    font-optical-sizing: auto;
    font-weight: <weight>;
    font-style: normal;
    font-variation-settings:
        "wdth" 100;
    }
`