import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import { Container, Card } from "./styles.js";

function App() {
    const [primeirocard, setPrimeirocard] = useState(); //Salva o icon para comparar
    const [primeirocardindex, setPrimeirocardindex] = useState(); //Salva o index do primeiro item clicado
    const [cardsFlip, setCardsFlip] = useState([]); //State que deixa visible o card
    const [cards, setCards] = useState([]); //Array onde contem o emoji, literalmente os elementos
    const [block, setBlock] = useState(false);

    const randomSort = () => {
        return 0.5 - Math.random();
    };
    useEffect(() => {
        let arr = ["🥙", "🍺", "🍕", "🍿", "🥩", "🎂"];
        arr = arr.sort(randomSort);

        let arr2 = ["🥙", "🍺", "🍕", "🍿", "🥩", "🎂"];
        arr2 = arr2.sort(randomSort);

        let array = arr.concat(arr2);
        array = array.sort(randomSort);

        setCards(array);
    }, []);

    const handleClick = ({ e, index, elem }) => {
        if (block === true) return false; //Da return se dois cartões estiverem visiveis e irão fechar em breve.
        if (cardsFlip[index] === true) {
            setTimeout(() => {
                const cardsflipaux = cardsFlip.slice();
                cardsflipaux[index] = false;
                cardsflipaux[primeirocardindex] = false;
                setCardsFlip(cardsflipaux);
                setBlock(false);
            }, 1500);
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
            }, 1500);
        }

        setCardsFlip(cardsflipaux);
    };

    return (
        <Container>
            {cards.map((elem, index) => {
                return (
                    <>
                        <ReactCardFlip isFlipped={cardsFlip[index]} flipDirection="vertical">
                            <Card onClick={(e) => handleClick({ e, index, elem })}>
                                <h1>?</h1>
                            </Card>

                            <Card onClick={(e) => handleClick({ e, index, elem })}>
                                <h1> {elem}</h1>
                            </Card>
                        </ReactCardFlip>
                    </>
                );
            })}
        </Container>
    );
}

export default App;
