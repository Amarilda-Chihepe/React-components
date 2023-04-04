import Picture from "./Assets/images/picture.jpg";
import Menu from "./Assets/images/menu.png";
import "./Assets/CSS/Style.css";
import Text from "./Text"

function HeaderComponent(){
    return(
        
       
          
            <div className="header">
                <header className="app-header">
                    <a href="" target="_blank"><Text text = "Gmail"/></a>
                    <a href="" target="_blank"><Text text = "Images"/></a>
                    <a href="" target= "_blank"><img src={Menu} alt="menu" className="menu"/></a>

                    <a href="" target= "_blank"><img src={Picture} alt="Profile" className="profile"/></a>
                   
                </header>
            </div>
               
              
    

    )
}

export default HeaderComponent;