import React, { useState } from 'react';

export function ComposeForm(props) {
  const { currentChannel, currentUser, howToAddMessageFunc } = props;

  const [typedInput, setTypedInput] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("submitting form", typedInput);

    howToAddMessageFunc(currentUser, typedInput, currentChannel);

    setTypedInput(""); //change what's on the board
  }

  const handleChange = (event) => {
    const newValue = event.target.value;
    //console.log(newValue);
    setTypedInput(newValue);
  }

  return (
    <form className="my-2" onSubmit={handleSubmit}>
      <div className="input-group">
        <textarea 
          className="form-control" rows="2" placeholder="Type a new message"
          value={typedInput}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-secondary">
          <span className="material-icons">send</span>
        </button>
      </div>
    </form>
  );
}