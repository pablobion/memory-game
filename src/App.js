import React, { useState } from "react";
import { Container, GlobalStyle } from "./styles";
import Game from "./pages/game";
import img from "./logo-gif.gif";

function App() {
    const [play, setPlay] = useState(false);
    const [nCards, setNcards] = useState(25);

    return (
        <>
            <Container>
                {play ? (
                    <Game nCards={nCards} />
                ) : (
                    <>
                        <h1>Matching Game</h1>
                        <img src={img} alt="" />
                        <div>
                            <input type="text" placeholder="25" maxLength="2" min="2" max="50" onChange={(e) => setNcards(e.target.value)} />
                            <h4>Nº Cards</h4>
                        </div>
                        <button
                            onClick={() => {
                                setPlay(true);
                            }}
                        >
                            START
                        </button>
                    </>
                )}
            </Container>
            <GlobalStyle />
        </>
    );
}

export default App;
