
import { BsCheckCircleFill,BsPlay } from 'react-icons/bs';
import { VscError } from 'react-icons/vsc';
import styled from 'styled-components';
import setinha from "./img/setinha.png"


export default function Card({ perguntas, setPerguntas,setUltimaPerguntaClicada,setConRespostas,contRespostas }) {



    function cliqueCard(p) {
        const novasPerguntas = [...perguntas]
        novasPerguntas[p.id].condicao = "aberta"

        setPerguntas(novasPerguntas)



    }

    function MudarTela(p) {
        setUltimaPerguntaClicada(p)
        
        

        const novasPerguntas = [...perguntas]
        novasPerguntas[p.id].condicao = "aberta1"

        setPerguntas(novasPerguntas)
        
        

    }





    return (


        <>
            {perguntas.map((p) =>
                (
                <>
                    {p.condicao === "fechado" && 
                        <Cards cor={p.cor} key={p.id} >
                            <h1>Pergunta {p.id}</h1><BsPlay onClick={() => cliqueCard(p)} /> 

                        </Cards>}

                    {p.condicao === "aberta" && 
                        <CardAberto key={p.id}>
                            <h1>{p.pergunta}</h1>
                            <img src={setinha} alt="setinha" onClick={() => MudarTela(p)} />
                        </CardAberto>}

                    {p.condicao === "aberta1" && 
                        <CardRes key={p.id}>
                            <h1>{p.resposta}</h1>
                        </CardRes>
                    } 
                    {p.condicao === "resultado" && 
                        <Cards cor={p.cor} key={p.id} >
                            <h1>Pergunta {p.id}</h1>{p.condicao === "resultado" ? <VscError/> : <BsCheckCircleFill/>}
                        </Cards>}
                </>
                )


            )}
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
    color:${({cor})=> cor};
    //text-decoration: line-through; 
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
        
        padding-top:90px;
        margin-left:260px 
        
        
    }



`

const CardRes = styled.div`
    width: 300px;
    height: 130px;
    border-radius:5px;
    margin-bottom:10px;

    font-family: 'Recursive', sans-serif;
    font-style: normal;
    font-weight: 400;
    background-color: #FFFFD5;
    h1{
        padding-top:10px;
        padding-left:10px
    }

`


