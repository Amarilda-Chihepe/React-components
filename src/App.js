import logo from './logo.svg';
//import './App.css';
import HeaderComponent from './HeaderComponent';
import GoolgeContainer from './GoogleBody';
import GoolgeBody from './GoogleBody';
import FooterComponent from './FooterComponent';

function App() {
  return (
    
    <div className="App">
      <div className="_header">
        <HeaderComponent/>  
      </div>

      <div>
        <GoolgeBody/>
      </div>

      <div>
        <FooterComponent/>
      </div>
    </div>
     
  );
}

export default App;
