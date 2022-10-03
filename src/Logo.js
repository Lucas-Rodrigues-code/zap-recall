import styled from 'styled-components';
import logo from "./img/image2.png"

function Logo() {
    return (
        <Logodiv>
            <img src={logo} alt='logo' />
            <h1>ZapRecall</h1>
        </Logodiv>
    )
}

export default Logo


const Logodiv = styled.div`
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




