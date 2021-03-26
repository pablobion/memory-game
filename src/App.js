import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import Teste from "./teste/index";

function App() {
    const [escolha1, setEscolha1] = useState("");
    const [escolha2, setEscolha2] = useState("");
    const [primeirocard, setprimeirocard] = useState();

    const [flipCards, setFlipCards] = useState([]);
    const [cards, setCards] = useState([]); //Emoji dos cars

    const handleClickCard = ({ elem, e }) => {
        if (!escolha1) {
            setEscolha1(elem);
            setprimeirocard(e);

            return;
        }

        if (escolha1 === elem) {
            setEscolha2(elem);
            alert("achou");

            setEscolha1("");
            setEscolha2("");
        }

        setEscolha1("");
        setEscolha2("");
        setTimeout(() => {
            primeirocard.target.style.background = "black";
            e.target.style.background = "black";
        }, 2000);
    };

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

    const handleClick = ({ e, index }) => {
        console.log(flipCards[index]);
        let arr = flipCards;
        arr[index] = false;
        console.log(flipCards);
        setFlipCards(arr);
        console.log(flipCards);
        e.preventDefault();
    };

    return (
        <>
            <h1>{escolha1}</h1>
            <h1>{escolha2}</h1>

            <div className="App" style={{ display: "flex", flexDirection: "column" }}>
                {cards.map((elem, index) => {
                    flipCards[index] = true;
                    return (
                        <>
                            <div
                                onClick={(e) => {
                                    e.target.style.background = "transparent";
                                    handleClickCard({ elem, e });
                                }}
                                style={{ border: "1px solid black", width: 100, height: 40, cursor: "pointer", marginBottom: 5, backgroundColor: "black" }}
                            >
                                [{elem}]
                            </div>
                            <ReactCardFlip isFlipped={() => flipCards[index]} flipDirection="vertical">
                                <p>
                                    This is the front of the card.
                                    <button onClick={(e) => handleClick({ e, index })}>Click to flip</button>
                                </p>

                                <p>
                                    This is the back of the card.
                                    <button onClick={(e) => handleClick({ e, index })}>Click to flip</button>
                                </p>
                            </ReactCardFlip>
                        </>
                    );
                })}
            </div>
        </>
    );
}

export default App;
