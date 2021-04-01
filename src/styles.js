import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 50px;
    h1 {
        color: white;
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
