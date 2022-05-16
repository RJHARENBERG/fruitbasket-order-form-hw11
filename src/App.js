import './App.css';
// import counter from "./componenten/counter/counter";
import React, {useState} from "react";

function App() {
    const [bananenCounter, setBananenCounter] = useState(0)
    const [aardbijCounter, setAardbijCounter] = useState(0)
    const [appelsCounter, setAppelsCounter] = useState(0)
    const [kiwiCounter, setKiwiCounter] = useState(0)

    const [firstNameMessageValue, setFirstNameMessageValue] = React.useState('')
    const [lastNameMessageValue, setLastNameMessageValue] = React.useState('')
    const [ageMessageValue, setAgeMessageValue] = React.useState(0)
    const [zipCodeMessage, setZipCodeMessage] = React.useState('')

    const [deliveryFrequency, setDeliveryFrequency] = React.useState('Iedere week')

    const [deliveryDayTime, toggleDeliveryDayTime] = React.useState(false)
    const [deliveryEvening, toggleDeliveryEvening] = React.useState(false)

    const [commentsMessageValue, setCommentsMessageValue] = React.useState('')

    const [termsAndConditionsValue, toggleTermesAndConditionsValue] = React.useState(false)

    function countersToZero() {
        setKiwiCounter(0)
        setAppelsCounter(0)
        setBananenCounter(0)
        setAardbijCounter(0)
    }

    function daypart() {
        if (deliveryDayTime === true) {
            return "Day time"
        } else return "Evening"
    }

    function sendOrder() {
        console.log(`Order plaste\n\nFirst name: ${firstNameMessageValue}\nLast name: ${lastNameMessageValue}\nAge: ${ageMessageValue}\nZip code: ${zipCodeMessage}\n\nDelivery frequency: ${deliveryFrequency}\n\nDaypart: ${daypart()}\n\n${firstNameMessageValue}'s Order is: `)
        console.log(`Bananen ${bananenCounter}\nAardbeien ${aardbijCounter}\nAppels ${appelsCounter}\nKiwi's${kiwiCounter} `)
        console.log(`Comments: \n${commentsMessageValue}\n\n${firstNameMessageValue} agreement is ${termsAndConditionsValue}`)
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <main>
                <article>
                    <h2> Bananen 🍌</h2>
                    <div>
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
                    </div>
                </article>
                <article>
                    <h2>Aarbeien 🍓</h2>
                    <div>
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
                    </div>
                </article>
                <article>
                    <h2>Appels 🍏</h2>
                    <div>
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
                    </div>
                </article>
                <article>
                    <h2>Kiwi's 🥝</h2>
                    <div>
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
                    </div>
                </article>
                <div>
                    <button type={"button"}
                            onClick={() => countersToZero()}
                    >Reset
                    </button>
                </div>

            </main>

            <form>
                <label htmlFor="FirstName">
                    Voornaam
                    <input
                        type="text"
                        id="form-first-name"
                        name="first-name"
                        value={firstNameMessageValue}
                        onChange={(e) => setFirstNameMessageValue(e.target.value)}
                    />
                </label>
                <label
                    htmlFor="LastName">
                    Achternaam
                    <input type="text"
                           id="form-last-name"
                           name="last-name"
                           value={lastNameMessageValue}
                           onChange={(e) => setLastNameMessageValue(e.target.value)}
                    />
                </label>
                <label
                    htmlFor={"Age"}>
                    Leeftijd
                    <input
                        type="text"
                        name="Age"
                        value={ageMessageValue}
                        onChange={(e) => setAgeMessageValue(e.target.value)}
                    />
                </label>

                <label
                    htmlFor={"zipCode"}>
                    Postcode
                    <input
                        type={"text"}
                        name={"zipCode"}
                        value={zipCodeMessage}
                        onChange={(e) => setZipCodeMessage(e.target.value)}
                    />
                </label>

                <h2>Bezorg frequentie</h2>


                <select
                    id="deliveryFrequency"
                    onChange={(e) => setDeliveryFrequency(e.target.value)}>
                    <option value="Iedere week">Iedere week</option>
                    <option value="om de week">om de week</option>
                    <option value="iedere maand">iedere maand</option>
                </select>

                <label
                    htmlFor="dayTime">
                    Overdag
                    <input
                        type="radio"
                        id="dayTime"
                        checked={deliveryDayTime}
                        onChange={() => toggleDeliveryDayTime(!deliveryDayTime)}
                    />
                </label>

                <label
                    htmlFor="evening">
                    's Avonds'
                    <input
                        type="radio"
                        id="evening"
                        checked={deliveryEvening}
                        onChange={() => toggleDeliveryEvening(!deliveryEvening)}
                    />
                </label>

                <label
                    htmlFor="massage">
                    Opmerkingen
                    <textarea
                        id="massage"
                        name="massage"
                        rows="10"
                        cols="30"
                        onChange={(e) => setCommentsMessageValue(e.target.value)}
                    >

                    </textarea>
                </label>

                <label
                    htmlFor="akkoord">
                    Ik ga akkoord met de voorwaarden
                    <input
                        type="checkbox"
                        id="form-terms-and-conditions"
                        name="terms-and-conditions"
                        checked={termsAndConditionsValue}
                        onChange={() => toggleTermesAndConditionsValue(!termsAndConditionsValue)}
                    />
                </label>

                <button
                    type="button"
                    onClick={() => sendOrder()}
                >

                    Verzend
                </button>
            </form>
        </>
    )
}

export default App;
