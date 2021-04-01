import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import { Container, Card } from "./styles";
import { randomEmojis } from "../scripts/getemojis";

//components
import BackCard from "../components/card/back";
import FrontCard from "../components/card/front";

function App(props) {
    const [primeirocard, setPrimeirocard] = useState(); //Salva o icon para comparar
    const [primeirocardindex, setPrimeirocardindex] = useState(); //Salva o index do primeiro item clicado
    const [cardsFlip, setCardsFlip] = useState([]); //State que deixa visible o card
    const [cards, setCards] = useState([]); //Array onde contem o emoji, literalmente os elementos
    const [block, setBlock] = useState(false);

    const startCards = () => {
        let emojis = randomEmojis(props.nCards);
        let arrayEmojis = emojis.concat(emojis).sort(() => 0.5 - Math.random());
        setCards(arrayEmojis);
    };

    const resetCards = () => {
        const auxcardsFlip = cardsFlip.map(() => false);
        setCardsFlip(auxcardsFlip);
        setTimeout(() => {
            startCards();
        }, 1000);
    };

    useEffect(() => {
        startCards();
    }, []);

    const handleClick = ({ e, index, elem }) => {
        if (block) return false; //Da return se dois cartões estiverem visiveis e irão fechar em breve.
        if (cardsFlip[index] === true) {
            setTimeout(() => {
                const cardsflipaux = cardsFlip.slice();
                cardsflipaux[index] = false;
                cardsflipaux[primeirocardindex] = false;
                setCardsFlip(cardsflipaux);
                setBlock(false);
            }, 1000);
            return false;
        }

        setPrimeirocard("");
        setPrimeirocardindex("");
        const cardsflipaux = cardsFlip.slice();

        cardsflipaux[index] ? (cardsflipaux[index] = false) : (cardsflipaux[index] = true);

        if (cardsflipaux[index] === undefined) {
            cardsflipaux[index] = true;
        }

        setCardsFlip(cardsflipaux);

        if (!primeirocard) {
            setPrimeirocard(elem);
            setPrimeirocardindex(index);
            return;
        }
        if (primeirocard === elem) {
        } else {
            setBlock(true);
            setTimeout(() => {
                const cardsflipaux = cardsFlip.slice();
                cardsflipaux[index] = false;
                cardsflipaux[primeirocardindex] = false;
                setCardsFlip(cardsflipaux);
                setBlock(false);
            }, 1000);
        }

        setCardsFlip(cardsflipaux);
    };

    return (
        <>
            <button onClick={resetCards}>Restart</button>
            <Container>
                {cards.map((elem, index) => {
                    return (
                        <ReactCardFlip isFlipped={cardsFlip[index]} flipDirection="vertical" key={index}>
                            <Card onClick={(e) => handleClick({ e, index, elem })}>
                                <FrontCard />
                            </Card>

                            <Card onClick={(e) => handleClick({ e, index, elem })}>
                                <BackCard style={{ overflow: "hidden" }}> {elem}</BackCard>
                            </Card>
                        </ReactCardFlip>
                    );
                })}
            </Container>
        </>
    );
}

export default App;
