import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        console.group("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick =()=>{
        console.group("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChanged = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter text here1");
    //text = "new Text"; // wrong way to change the state
    //setText("new text");
    return (
        <>
        <div className='container'>
        <h1>{props.heading}</h1>
        <div class="mb-3">
        <textarea className="form-control" value ={text} onChange={handleOnChanged} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        </div>
        <div className="container">
            <h1>your text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split("").length} minutes are required to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
    
  )
}
 