import React from "react";


function counter({fruitName, hook, setHook}) {
    return (
        <article>
            <h2> {fruitName}</h2>
            <div>
                <button type={"button"}
                        onClick={() => setHook(hook - 1)}
                        disabled={hook === 0}>
                    -
                </button>
                <span>{hook}</span>
                <button
                    type="button"
                    onClick={() => setHook(hook + 1)}>
                    +
                </button>
            </div>
        </article>
    )
}
export default counter