import Logo from "./Assets/images/logo1.png"
import "./Assets/CSS/Style.css";

function Google_img(){
    return(
        <div className="google-logo">
            <img src={Logo} alt="Goolge Logo" className="logo"/>
        </div>
    )
}

export default Google_img;