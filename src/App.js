import logo from './logo.svg';
import './App.css';
// import { Button } from './components/styled-comp/button/Button.styles';
// import StyledComponents from './components/styled-comp/index';
import Buttons from './components/material-ui/buttons/Buttons';


function App() {
  return (
    <div className="App">
      <header className="App-header">
     {/* <h1>Styled Components & Material-UI</h1> */}
     {/* <Button>Click me</Button>
     <Button primary>Second</Button> */}
     {/*<StyledComponents/>{/*App.js kalabalık olmaması açısından yukarıdaki kullanım yerine bu kullanım tercih edilmelidir */}
     <Buttons/>

     
     </header>
    </div>
  );
}

export default App;
