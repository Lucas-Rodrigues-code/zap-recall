import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'

import Card from "./Cards"
import Button from './Buttons';

import logo from "./img/image2.png"

function App() {
    return (
        <>
            <GlobalStyle />
            <Logo>
                <img src={logo} alt='logo' />
                <h1>ZapRecall</h1>
            </Logo>
            <Card/>
            <Button/>
            
            
        </>
    )
}

export default App;


// Estilos css com styled-components

const Logo = styled.div`
    width: auto;
	height: auto;
	
    margin-top: 48px;
    display:flez;
    align-items: center;
   
    h1{
        margin-left: 20px;
        font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.012em;

    color: #FFFFFF;

    transform: rotate(0.58deg);
    }

`

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


