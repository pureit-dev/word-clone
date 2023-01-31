import React from "react";

function Form({setGuess}) {

  const [input, setInput] = React.useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    setGuess(input)
    setInput("")
  }

  return (
		<form className="guess-input-wrapper" onSubmit={handleSubmit}>
			<label forhtml="guess-input">Enter guess:</label>
			<input
				id="guess-input"
				type="text"
				pattern=".{5,}"
				maxLength="5"
				value={input}
				onChange={(event) => {
					setInput(event.target.value.toUpperCase())
				}}
			/>
		</form>
  )
}

export default Form;
