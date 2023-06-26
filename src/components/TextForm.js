import React, {useState} from "react";

export default function Form(props) {
  const[text, setText] = useState('');
  const change =(event)=>{
    setText(event.target.value)
  }
  const textSummary = () => {
    let wordCount = text.split(" ").length;
    let charCount = text.length;
    let sentenceCount = text.split(".").filter((sentence) => sentence.trim() !== "").length;
  
    if (text === "") {
      wordCount = 0;
      charCount = 0;
      sentenceCount = 0;
    }
  
    return `${wordCount} words and ${charCount} characters and ${sentenceCount} sentences`;
  };
  
  const uppercase =()=>{
    let newText=text.toUpperCase();
    setText(newText);
    if(text !== ""){
    props.showAlert("Converted to Upper Case successfully!", "primary")
    }
    else{
      props.showAlert("Sorry you have not entered any text!", "danger")
    }
  }
  const lowercase =()=>{
    let newText=text.toLowerCase();
    setText(newText);
    if(text!== ""){
      props.showAlert("Converted to Lower Case successfully!", "primary")
      }
      else{
        props.showAlert("Sorry you have not entered any text!", "danger")
      }
  }
  const copyText =()=>{
    const text = document.getElementById("textArea");
    text.select();
    navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard succesfully!", "primary")
    
  }
  const clearText =()=>{
    let newText="";
    setText(newText);
    if(text!==""){
      props.showAlert("Text cleared succesfully!", "warning")
      }
      else{
        props.showAlert("Nothing to clear in text box!", "danger")
      }
  }

   return (
<>
<div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>        
      <h1>{props.title}</h1>
      <div className="mb-3">
        <textarea className="form-control"
        placeholder="Type here..." value={text} onChange={change} id="textArea"
          rows="7" style={{backgroundColor: props.mode ==='dark'?'rgb(220, 220, 220)':'white'}}
        />
      </div>
        <button className="btn btn-primary mx-1" onClick={uppercase}>Convert to UpperCase</button>
          <button className="btn btn-primary mx-1" onClick={lowercase}>Convert to LowerCase</button>
          <button className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy Text</button> 
          <button className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear</button>
           
      </div>
      <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{textSummary()}</p>
        
        <p>{Math.round((text.split(" ").length)*0.01) + " Minutes Read"} </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
      </>   
  );
}
