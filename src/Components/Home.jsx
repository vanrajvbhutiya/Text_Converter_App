import { useState } from "react";

const Home = () => {

    const headlOnChange = (event) => {
        console.log("onChangeCall")
        setText(event.target.value);
    }

    const headlOnClick = () => {
        console.log("headlOnClickCall")
        let newText = Text.toUpperCase();
        setText(newText); 
        
    }
    const ConvertToLowerCase = () =>{
        let newText = Text.toLowerCase();
        setText(newText);
    }

    const [Text , setText] = useState("Ente r Your Text here...");
    
const textarea = {
    "margin":"20px",
    "margin-right":"20px",
}

    return (
        <div className="main">
                <h1>Text Converter</h1>
               <textarea className="form-control" style={textarea} value={Text} placeholder="enter your text here" id="exampleFormControlTextarea1" rows="3" onChange={headlOnChange}></textarea><br />
                <br />
                <button onClick={headlOnClick} onDoubleClick={ConvertToLowerCase}>Clike</button>
        </div>
    )

}



export default Home;