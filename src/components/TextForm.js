import React , {useState} from 'react'

export default function TextForm(props) {
    // handle on change
    const handleOnChange = (event)=>
    {
        setText(event.target.value)
    }
    const [text,setText] = useState("");

    //Convert To upperCase
const handleUpClick = ()=>
{
    let newText = text.toUpperCase();
    setText(newText);
}

    //Convert To lowerCase
const handleDownClick = () =>
{
    let newText = text.toLowerCase();
    setText(newText);
}
    //Remove Extra Spaces
const handleRemoveExtra = () =>
{
    let newText = text.split(/[ ]+/);//used regex
    setText(newText.join(" "))
}
    // Copy to clipboard
const handleCopyClick = () =>
{
    let val = document.getElementById("myBox");
    val.select();
    // document.execCommand("copy"); this is depreciated
    navigator.clipboard.writeText(val.value);
}
    //Clear Text
const handleClearClick = () =>
{
    setText("")
}
return (
<>
<div className ={`container text-${props.mode==='dark'?'light':'dark'}`}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className={`form-control text-${props.mode==='dark'?'light':'dark'}`} id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light'?'white':'#042743'}}></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
    <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to LowerCase</button>
    <button className="btn btn-primary mx-2" onClick={handleRemoveExtra}>Remove Extra Space</button>
    <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy to ClipBoard</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
</div>
<div className={`container my-2 text-${props.mode==='dark'?'light':'dark'}`}>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} Characters</p>
    <p>{0.008 * text.split(" ").length} Minutes Read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something To Preview"}</p>
</div>    
</>

)
}
