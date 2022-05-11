import './App.css';
// import counter from "./componenten/counter/counter";
import {useState} from "react";

function App() {
    const [bananenCounter, setBananenCounter] = useState(0)
    const [aardbijCounter, setAardbijCounter] = useState(0)
    const [appelsCounter, setAppelsCounter] = useState(0)
    const [kiwiCounter, setKiwiCounter] = useState(0)

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>

            <article>
                <h2> Bananen 🍌</h2>
                <button type={"button"}
                        onClick={() => setBananenCounter(bananenCounter - 1)}
                        disabled={bananenCounter === 0}>
                    -
                </button>
                <span>{bananenCounter}</span>
                <button
                    type="button"
                    onClick={() => setBananenCounter(bananenCounter + 1)}>
                    +
                </button>
            </article>
            <article>
                <h2>Aarbeien 🍓</h2>
                <button type={"button"}
                        onClick={() => setAardbijCounter(aardbijCounter - 1)}
                        disabled={aardbijCounter === 0}>
                    -
                </button>
                <span>{aardbijCounter}</span>
                <button
                    type="button"
                    onClick={() => setAardbijCounter(aardbijCounter + 1)}>
                    +
                </button>
            </article>
            <article>
                <h2>Appels 🍏</h2>
                <button type={"button"}
                        onClick={() => setAppelsCounter(appelsCounter - 1)}
                        disabled={appelsCounter === 0}>
                    -
                </button>
                <span>{appelsCounter}</span>
                <button
                    type="button"
                    onClick={() => setAppelsCounter(appelsCounter + 1)}>
                    +
                </button>
            </article>
            <article>
                <h2>Kiwi's 🥝</h2>
                <button type={"button"}
                        onClick={() => setKiwiCounter(kiwiCounter - 1)}
                        disabled={kiwiCounter === 0}>
                    -
                </button>
                <span>{kiwiCounter}</span>
                <button
                    type="button"
                    onClick={() => setKiwiCounter(kiwiCounter + 1)}>
                    +
                </button>
            </article>
        </>
    )
}

export default App;
