import { useState } from 'react';
import styled from 'styled-components';
import setinha from "./img/setinha.png"

const perguntasInfo = [
    { id: "0", pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript", condicao: "fechado" },
    { id: "1", pergunta: "O React é __ ", resposta: "uma biblioteca JavaScript para construção de interfaces", condicao: "fechado" },
    { id: "2", pergunta: "Componentes devem iniciar com __ ", resposta: "letra maiúscula", condicao: "fechado" },
    { id: "3", pergunta: "Podemos colocar __ dentro do JSX ", resposta: "expressões", condicao: "fechado" },
    { id: "4", pergunta: "O ReactDOM nos ajuda __", resposta: "interagindo com a DOM para colocar componentes React na mesma", condicao: "fechado" },
    { id: "5", pergunta: "Usamos o npm para __ ", resposta: "gerenciar os pacotes necessários e suas dependências", condicao: "fechado" },
    { id: "6", pergunta: "Usamos props para __ ", resposta: "passar diferentes informações para componentes ", condicao: "fechado" },
    { id: "7", pergunta: "Usamos estado (state) para __", resposta: " dizer para o React quais informações quando atualizadas devem renderizar a tela novamente", condicao: "fechado" }
]

export default function Card() {
    const [perguntas, setPerguntas] = useState(perguntasInfo)
    
   

    function cliqueCard(p) {
        const novasPerguntas =[...perguntas]
        novasPerguntas[p.id].condicao = "aberta"
        console.log(novasPerguntas)
        
         setPerguntas(novasPerguntas)
        
  
        
    }

 



    return (


        <>
            {perguntas.map((p) => {
                return (
                    <>
                        {p.condicao === "fechado" ?
                            (<Cards key={p.id} >
                                <h1>Pergunta {p.id}</h1><svg onClick={()=>cliqueCard(p)} xmlns="http://www.w3.org/2000/svg"
                                    className="ionicon" viewBox="0 0 512 512"><title>Play</title><path
                                        d="M112 111v290c0 17.44 17 28.52 31 20.16l247.9-148.37c12.12-7.25 12.12-26.33 0-33.58L143 90.84c-14-8.36-31 2.72-31 20.16z"
                                        fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" /></svg>
                            </Cards>)
                            :    (
                                <CardAberto key={p.id}>
                                    <h1>{p.pergunta}</h1>
                                    <img src={setinha} alt="setinha" />
                                </CardAberto>
                            )
                    
                
            
                
                }
                    </>
                )

            })}
        </>

    )



}



const Cards = styled.div`
    width: 300px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    color: black;
    border-radius: 5px;
    margin: 10px 0px;
    padding: 10px 10px; 
    cursor: pointer; 
    font-family: 'Recursive', cursive;


    svg{
        width: 20px;
        height: 23px;
  
    } 
    
`

const CardAberto = styled.div`
    width: 300px;
    height: 130px;
    border-radius:5px;

    min-height: 130px;
    display: flex;
    flex-direction: column;
    background-color: #FFFFD5;
    cursor: default;
    padding: 20px 10px;

    font-family: 'Recursive', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    margin-bottom:10px;

    img{
        width: 30px;
        height: 20px;
        margin-top:100px;
        margin-left:260px
    }



`


