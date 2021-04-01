import React from "react";

import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
`;

export const Background = styled.small`
    font-size: 150px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    filter: blur(20px) opacity(0.4);
    z-index: -1;
`;

function card(props) {
    return (
        <Container>
            <h1>{props.children}</h1>
            <Background>{props.children}</Background>
        </Container>
    );
}

export default card;
