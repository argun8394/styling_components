import logo from './logo.svg';
import './App.css';
// import { Button } from './components/styled-comp/button/Button.styles';
// import StyledComponents from './components/styled-comp/index';
import Buttons from './components/material-ui/buttons/Buttons';
import CheckBoxComp from './components/material-ui/checkbox/CheckBoxComp';
import TextFieldComp from './components/material-ui/text-field/TextFieldComp';
import {ThemeProvider,createMuiTheme} from '@material-ui/core/styles';
import { orange, green } from '@material-ui/core/colors';

const theme = createMuiTheme({ /*Tema değişikliklerini gönderdik */
  palette: {
    primary: {
      main:orange[400]
    },
    secondary: {
      main: green[300]
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>{/*Tema değişikliği yapmamız için ana componenti themeProvider ile sarmallayarak uyguladık */}
    <div className="App">
      <header className="App-header">
     {/* <h1>Styled Components & Material-UI</h1> */}
     {/* <Button>Click me</Button>
     <Button primary>Second</Button> */}
     {/*<StyledComponents/>{/*App.js kalabalık olmaması açısından yukarıdaki kullanım yerine bu kullanım tercih edilmelidir */}
     <TextFieldComp/>
     <CheckBoxComp/>
     <Buttons/>

     
     </header>
    </div>
    </ThemeProvider>
  );
}

export default App;
