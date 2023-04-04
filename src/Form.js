import "./Assets/CSS/Style.css";
import Text from "./Text";
import { useState } from "react";


/*function holdEvent(){

    let input =document.getElementById("input-text");
    let key = e.keyCode;
    if(key  == 13){
       document.getElementById("text").innerHTML = input.value ;
    }*/
    

function Form(){
    const [text, setText] = useState("Text before click the Enter key");

    return(
        <div>
            <form>
                <input 
                type="text" 
                className="input-text" 
                id="input-text"
                onKeyUp={(e) => { if(e.keyCode == 13){
                    e.preventDefault();
                    setText(document.getElementById("input-text").value)
                    
                }}}
                />
            </form>

            <div id="text">{text}</div>

            <div className="botton">
                
                <a href="" className="button">Google Search</a>
                <a href="" className="button">I'm Feeling Lucky</a>
              
            </div>

            <div className="goolge-language">
                <Text text="Google is offered in:"/>
                <a href="" className="lang"style={{marginLeft: 20 + 'px'}}>Portugues(Portugal)</a>
                <a href="" className="lang">Kiswahili</a>
                <a href="" className="lang">chichewa</a>
                <a href="" className="lang">ChiShona</a>
            </div>
        </div>
    )
}



export default Form;