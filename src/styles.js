import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 10px;

    -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 2s; /* Firefox < 16 */
    -ms-animation: fadein 2s; /* Internet Explorer */
    -o-animation: fadein 2s; /* Opera < 12.1 */
    animation: fadein 2s;

    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    /* Firefox < 16 */
    @-moz-keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    /* Safari, Chrome and Opera > 12.1 */
    @-webkit-keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    /* Internet Explorer */
    @-ms-keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    /* Opera < 12.1 */
    @-o-keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    h1 {
        color: white;
        font-size: 40px;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;

        input {
            margin-right: 10px;
            width: 50px;
            padding: 3px;
            text-align: center;
            border-radius: 3px;
        }
    }
    button {
        cursor: pointer;
        border-radius: 5px;
        padding: 10px 30px;
        font-size: 20px;
        background-color: #25416d;
        color: white;
        border: none;

        &:hover {
            background-color: #1c3253;
        }
    }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #121f34;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;
