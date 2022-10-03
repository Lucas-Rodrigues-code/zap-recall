import Card from "./Cards"
import Button from './Buttons';

function Conteudo() {

    function naoLembrei(){
        alert("naoLembrei")
    }


    return (
        <>
            <Card />
            <Button naoLembrei={naoLembrei}/>
        </>
    )
}

export default Conteudo