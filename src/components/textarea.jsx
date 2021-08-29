import React, {useState} from 'react';
import Button from './button';
import {CopyToClipboard} from 'react-copy-to-clipboard';

function Textarea(props) {
    const [text, setText] = useState("");

    const handleUpperCase = () => {
        let newTxt = text.toUpperCase();
        setText(newTxt);
    }
    const handleLowerCase = () => {
        let newTxt = text.toLowerCase();
        setText(newTxt);
    }
         
    
    const handleOnchange = (event) => {
        setText(event.target.value);
    }
    
    const handleClear = (event) => {
        let clearText = "";
        setText(clearText);
    }
    
    return (
        <div>
            <div className={`mb-3 text-${props.mode==='light'?'Dark':'light'}`}>
                <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.header}</label>
                <textarea className="form-control" onChange={handleOnchange} value={text} id="exampleFormControlTextarea1" rows="6"></textarea>
                <br />
                <div className="container">
                    <p>Total words {text.split(' ').length} and Total Character {text.length}</p>
                    <p>{0.008 * text.split(' ').length} Minutes</p>
                </div>
                <Button func={handleUpperCase} name="To Upper Case"/> 
                <Button func={handleLowerCase} name="To Lower Case"/>
                <Button func={handleClear} name="Clear"/>
                <CopyToClipboard text={text}>
                   <button className="btn btn-primary mx-2 my-2">Copy</button>
                </CopyToClipboard>
                <br />
                <h3>Text Preview</h3>
                <p>{text.length>0?text:"Your Text will appear here :)"}</p>
            </div>
        </div>
    )
}

export default Textarea
