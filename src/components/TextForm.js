import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("clicked"+ text)
        let newtext = text.toUpperCase()
        setText(newtext)
        props.showAlert("Converted to UpperCase!","success")
    }
    const handleLoClick = ()=>{
        // console.log("clicked"+ text)
        let newtext = text.toLowerCase()
        setText(newtext)
        props.showAlert("Converted to LowerCase!","success")
    }
    const handleclearClick = ()=>{
        // console.log("clicked"+ text)
        let newtext = ""
        setText(newtext)
        props.showAlert("Cleared Text!","success")
    }
    const handleOnChange = (event)=>{
        // console.log("changed")
        setText(event.target.value)
    }
    const[text,setText] = useState("");
    const handleCopy =()=>{
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges();
        props.showAlert("Copied!","success")
    }
    const handleExtraSpaces = () =>{
        let newText= text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("ExtraSpaces Removed!","success")

    }
  return (
    <>
   <div>
    <div className="mb-3" style={{color:props.mode==='light'?'black':'white'}}>
     <h1 className='mb-2'>{props.heading}</h1>
     <textarea className="form-control" value={text} onChange={handleOnChange}
      style={{backgroundColor:props.mode==='light'?'white':'#13466e' , color:{color:props.mode==='light'?'black':'white'}}} id="myBox" rows="8"></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclearClick}>Clear text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
    <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

   </div>
   <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} charachters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:'Nothing to preview!'}</p>

   </div>
   </>

  )
}
