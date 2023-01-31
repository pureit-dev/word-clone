import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({index,value, answer}) {
  
  return (
		  <p className="guess">
        {range(5).map(num => {
          checkGuess(value[num], answer)
         return <span key={num} className="cell">{value ? value[num] : undefined}</span>
        })}
				
				
			</p>
	)
}

export default Guess;
