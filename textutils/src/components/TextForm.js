import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{

        // console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!", "success");
    }

    const handleToLower = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared my-1!", "success");

    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState(" ");

    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <label for="myBox" class="form-label">Example textarea</label>
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to upper case</button>

            <button className="btn btn-primary mx-2 my-1" onClick={handleToLower}>Clear List</button>
        </div>

        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>Your Word Count Summary</h1>
            <p>{text.split(" ").length} words here and {text.length} cvdharacters</p>

            <h2>Preview</h2>
            <p>{text.length>0?text: "Enter something in the textbox above to preview it"}</p>

        </div>
        </>
    )
}
