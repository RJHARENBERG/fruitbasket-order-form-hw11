import React from "react";

function resetButton(){
    return(
        <div className="reset-button">
                <button type={"button"}
                        onClick={() => countersToZero(0)}
                >Reset
                </button>
        </div>
    )
}

export default resetButton