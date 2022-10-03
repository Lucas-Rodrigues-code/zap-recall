
import { createGlobalStyle } from 'styled-components'
import Conteudo from './Conteudo';




import Logo from './Logo';

function App() {
    return (
        <>
            <GlobalStyle />
            <Logo/>
            <Conteudo/>

        </>
    )
}

export default App;


// Estilos css com styled-components

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #FB6B6B;

    display: flex;
    justify-content: center;
    align-items: center;

    
    
  }
  
`