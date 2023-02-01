import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
import EndBanner from "../EndBanner/EndBanner";

function Cell({ letter, status }) {
	const className = status ? `cell ${status}` : "cell"
	return <span className={className}>{letter}</span>
}

function Guess({index,value, answer}) {
  const result = checkGuess(value, answer)
  const status = result ? result.every(item => item.status === "correct") : undefined
  console.log(status)

  return (
    <>
      <EndBanner />
    
		  <p className="guess">
        {range(5).map(num => (
          <Cell 
            key={num}
            letter={result ? result[num].letter : undefined}
            status={result ? result[num].status : undefined} 
          />
        ))}
				
				
			</p>
    </>
  
	)

}

export default Guess;
