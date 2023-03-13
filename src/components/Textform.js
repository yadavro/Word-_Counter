import React , {useState} from 'react'

export default function TextForm(props) {
    const handleOnChange =(event) =>{
        console.log("On change");
        setText(event.target.value);
    }
    const handleClick =() =>{
        console.log("On change was invoked");
       let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to UpperCase","success");
        
    }
    const handleClick1 =() =>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to lowercase","success")
    }
    const [text , setText]=useState("Enter your text here ?");
  return (
    <>
    <div className='container' style={{backgroundColor:props.mode ==="dark" ? "#042743":"white" , color:props.mode ==="dark" ? "white":"black"}} >
    <h1>{props.heading}</h1>
    <div className="mb-3">
  <textarea className="htmlForm-control"  style={{backgroundColor:props.mode ==="dark" ? "grey":"white" , color:props.mode ==="dark" ? "white":"black" ,border:props.mode ==="dark" ?"1px solid white":"1px solid black"}} onChange={handleOnChange} value={text} id="examplehtmlFormControlTextarea1" rows="4" cols="160"></textarea>
</div>
<button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleClick} >Convert to upperCase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClick1} >Convert to lowerCase</button>

    </div>
    <div className="container" style={{backgroundColor:props.mode ==="dark" ? "#042743":"white" , color:props.mode ==="dark" ? "white":"black"}} >
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length -text.split(" ").length+1} characters .</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
</>
  )
}
