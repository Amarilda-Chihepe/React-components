import "./Assets/CSS/Style.css";
import Text from "./Text";

function FooterComponent(){
    return(

        <div className="footer">
            <footer>
                <div className="footer-above"><Text text = "Mozambique"/></div>
                <div className="footer-under">
                    <div  className="footer-under-left">
                        <a href="">About</a>
                        <a href="">Adverting</a>
                        <a href="">Bussiness</a>
                        <a href="">How Search Words</a>
                    </div>

                    <div  className="footer-under-right">
                        <a href="">Privacy</a>
                        <a href="">Terms</a>
                        <a href="">Settings</a>
                    </div>
                </div>
            </footer>
            
        </div>

    )
}

export default FooterComponent;