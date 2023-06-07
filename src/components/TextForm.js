import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text coverted to uppercase successfully","success")
    if(text.length<1){
      props.showAlert("Please Enter text first in Textbox","danger")
    }
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text coverted to lower case successfully","success")
    if(text.length<1){
      props.showAlert("Please Enter text first in Textbox","danger")
    }
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces are removed succesfully","success")
    if(text.length<1){
      props.showAlert("Please Enter text first in Textbox","danger")
    }
  };

  const handleCopyClick = () => {
    let newText = document.getElementById("mybox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Text copied successfully","success")
    if(text.length<1){
      props.showAlert("Please Enter text first in Textbox!","danger")
    }
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared successfully","success")
    if(text.length<1){
      props.showAlert("Please Enter text first in Textbox","danger")
    }
  };
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div style={{color: props.mode=== 'dark'? 'white' : 'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="10"
            style={{backgroundColor: props.mode=== 'dark'? '#161125' : 'white',color: props.mode=== 'dark'? 'white' : 'black'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to Lowecase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>
          Copy Text
        </button>
      </div>

      <div className="container my-4" style={{color: props.mode=== 'dark'? 'white' : 'black'}}>
        <h3>Your Para Summary</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes required to read it</p>
        <h2>Preview</h2>
        <p>{text.length>0? text :'Enter Something in the textbox to preview it'}</p>
      </div>
    </>
  );
}
