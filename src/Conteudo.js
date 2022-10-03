import { useState } from 'react';

import styled from 'styled-components';

import Card from "./Cards"
import Button from './Buttons';


const perguntasInfo = [
    { id: 0, pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript", condicao: "fechado", cor: "#333333", tipoResultado:""},
    { id: 1, pergunta: "O React é __ ", resposta: "uma biblioteca JavaScript para construção de interfaces", condicao: "fechado", cor: "#333333", tipoResultado:"" },
    { id: 2, pergunta: "Componentes devem iniciar com __ ", resposta: "letra maiúscula", condicao: "fechado", cor: "#333333", tipoResultado:"" },
    { id: 3, pergunta: "Podemos colocar __ dentro do JSX ", resposta: "expressões", condicao: "fechado", cor: "#333333" },
    { id: 4, pergunta: "O ReactDOM nos ajuda __", resposta: "interagindo com a DOM para colocar componentes React na mesma", condicao: "fechado", cor: "#333333" },
    { id: 5, pergunta: "Usamos o npm para __ ", resposta: "gerenciar os pacotes necessários e suas dependências", condicao: "fechado", cor: "#333333" },
    { id: 6, pergunta: "Usamos props para __ ", resposta: "passar diferentes informações para componentes ", condicao: "fechado", cor: "#333333" },
    { id: 7, pergunta: "Usamos estado (state) para __", resposta: " dizer para o React quais informações quando atualizadas devem renderizar a tela novamente", condicao: "fechado", cor: "#333333" }
]


function Conteudo() {

    const [perguntas, setPerguntas] = useState(perguntasInfo)
    const [ultimaPerguntaClicada, setUltimaPerguntaClicada] = useState(null)
    const [contRespostas, setConRespostas] = useState(0)



  

    
    return (
        <>
            <ContainerCard>
                <Card perguntas={perguntas} setPerguntas={setPerguntas} setUltimaPerguntaClicada={setUltimaPerguntaClicada} setConRespostas={setConRespostas} contRespostas={contRespostas}/>
            </ContainerCard>
            <Button perguntas={perguntas} setPerguntas= {setPerguntas} ultimaPerguntaClicada={ultimaPerguntaClicada} contRespostas={contRespostas} setConRespostas={setConRespostas} />
        </>
    )
}

export default Conteudo


const ContainerCard = styled.div`
    height: 500px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
    display: none;
}
    
`

