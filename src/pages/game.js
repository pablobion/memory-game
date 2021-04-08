import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import { Game, Container, Card } from "./styles";
import { randomEmojis } from "../scripts/getemojis";

//components
import BackCard from "../components/card/back";
import FrontCard from "../components/card/front";

function App(props) {
    const [primeiroCard, setPrimeiroCard] = useState(""); //Salva o icon para comparar
    const [indexprimeiroCard, setIndexprimeiroCard] = useState();
    const [cardsFlip, setCardsFlip] = useState([]); //State que deixa visible o card
    const [cards, setCards] = useState([]); //Array onde contem o emoji, literalmente os elementos
    const [moves, setMoves] = useState(0);
    const [paresEncontrados, setParesEncontrados] = useState(0);
    const [block, setBlock] = useState(false);
    const [startGame, setStartGame] = useState(false);

    const startCards = () => {
        let emojis = randomEmojis(props.nCards);
        let arrayEmojis = emojis.concat(emojis).sort(() => 0.5 - Math.random());
        setCards(arrayEmojis);
    };

    const resetCards = () => {
        setCardsFlip(cardsFlip.map(() => false));
        setMoves(0);
        setTimeout(() => {
            startCards();
        }, 1000);
    };

    const flipCard = (index) => {
        const cardsflipaux = cardsFlip.slice();
        cardsflipaux[index] ? (cardsflipaux[index] = false) : (cardsflipaux[index] = true);
        setCardsFlip(cardsflipaux);
    };

    useEffect(() => {
        if (!startGame) {
            startCards();
            setStartGame(false);
        }

        if (paresEncontrados >= props.nCards) alert("Congratulations!!!!");
    }, [paresEncontrados]);

    const handleClick = ({ e, index, elem }) => {
        if (block) return false; //Da return se ja tem dois cartoes selecionados e irão virar.

        setPrimeiroCard("");
        setIndexprimeiroCard("");
        flipCard(index);

        if (!primeiroCard) {
            setPrimeiroCard(elem);
            setIndexprimeiroCard(index);
            return;
        }
        if (primeiroCard === elem) {
            setParesEncontrados(paresEncontrados + 1);
        }

        if (primeiroCard !== elem) {
            setBlock(true);
            setTimeout(() => {
                const cardsflipaux = cardsFlip.slice();
                cardsflipaux[index] = false;
                cardsflipaux[indexprimeiroCard] = false;
                setCardsFlip(cardsflipaux);
                setBlock(false);
                setMoves(moves + 1);
            }, 1000);
        }
    };

    return (
        <Container>
            <div id="header">
                <button onClick={resetCards}>Restart</button>
                <h1>Pares encontrados: {paresEncontrados}</h1>
                <h1>Moves: {moves}</h1>
            </div>

            <Game>
                {cards.map((elem, index) => {
                    return (
                        <ReactCardFlip isFlipped={cardsFlip[index]} flipDirection="vertical" key={index}>
                            <Card onClick={(e) => handleClick({ e, index, elem })}>
                                <FrontCard />
                            </Card>

                            <Card>
                                <BackCard style={{ overflow: "hidden" }}> {elem}</BackCard>
                            </Card>
                        </ReactCardFlip>
                    );
                })}
            </Game>
        </Container>
    );
}

export default App;
