import logo from './logo.svg';
import './App.css';
// import { Button } from './components/styled-comp/button/Button.styles';
// import StyledComponents from './components/styled-comp/index';
import Buttons from './components/material-ui/buttons/Buttons';
import CheckBoxComp from './components/material-ui/checkbox/CheckBoxComp';
import TextFieldComp from './components/material-ui/text-field/TextFieldComp';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { orange, green } from '@material-ui/core/colors';
import TypographyComp from './components/material-ui/typography/TypographyComp';
import Wrapper from './components/material-ui/wrapper/Wrapper'
import Cards from './components/material-ui/cards/Cards';

const theme = createTheme({ /*Tema değişikliklerini gönderdik */
  palette: {
    primary: {
      main: orange[400]
    },
    secondary: {
      main: green[300]
    },
    typography: {/*Typography nin stillemesini istediğimiz şekilde */
      h2: {
        fontSize: 38,
        padding: 2
      },
      subtitle1: {
        marginBottom: 10
      }
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>{/*Tema değişikliği yapmamız için ana componenti themeProvider ile sarmallayarak uyguladık */}
      <Wrapper>
        <div className="App">
          <header className="App-header">
            {/* <h1>Styled Components & Material-UI</h1> */}
            {/* <Button>Click me</Button>
     <Button primary>Second</Button> */}
            {/*<StyledComponents/>{/*App.js kalabalık olmaması açısından yukarıdaki kullanım yerine bu kullanım tercih edilmelidir */}
            <TypographyComp />
            <Cards />
            <TextFieldComp />
            <CheckBoxComp />
            <Buttons />


          </header>
        </div>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
