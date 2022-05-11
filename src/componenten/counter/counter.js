import React from "react";

function counter({fruitName}) {
    return (

        <article>
            <h2>{fruitName}</h2>
            <button type={"button"}>
                -
            </button>
            {counter}
            <button
                type="button"
                onClick={() => console.log("klik")}>
                +
            </button>

        </article>

    )
}


export default counter