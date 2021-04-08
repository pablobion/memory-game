import React from "react";

import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: #2f5184;
`;

function card() {
    return (
        <Container>
            <h1>?</h1>
        </Container>
    );
}

export default card;
