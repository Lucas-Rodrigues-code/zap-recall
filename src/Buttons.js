import styled from 'styled-components';

export default function Button() {
    return (


        <Menu>
            <CaixaBotao>
                <Botao>
                    Não lembrei
                </Botao>
                <Botao1>
                    Quase não lembrei
                </Botao1>
                <Botao2>
                    Zap!
                </Botao2>
            </CaixaBotao>
            <h1>0/4 CONCLUÍDOS</h1>
        </Menu>




    )
}


const Botao = styled.button`
    width: 100%;
    height: 40px;
    background-color: #FF3030;
    color: white;
    font-size: 12px;
    font-weight: 700;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right:15px;


`
const Botao1 = styled(Botao)`
    background-color:   #FF922E;
    margin-left:5px;


`
const Botao2 = styled(Botao)`
    background-color:  #2FBE34;
    margin-left:5px;



`

const CaixaBotao = styled.div`
    width: 100%;
    display:flex;
    
    

`

const Menu = styled.div`
    width: 375px;
    height: 111px;

    background: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    

   
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    z-index: 1;
    width: 100%;
    min-height: 70px;
    padding: 14px 10px;
    font-size: 18px;
    color: black;
    position: fixed;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 20px;

`


