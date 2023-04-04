import Google_img from "./Google_Img";
import Form from "./Form"
import "./Assets/CSS/Style.css";

function GoolgeBody(){
   return(

      <div  className="body">
         <div>
            <Google_img/>
         </div>
         <div>
            <Form/>
         </div>
      </div>
      
   )
   
}

export default GoolgeBody;