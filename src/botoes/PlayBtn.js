import Botao from "./Botao"

export default function PlayBtn({ movieName }){
    function handlePlayClick(){
        alert(`Playing ${movieName}`)
    }

    <Botao onClick={handlePlayClick}>Play {movieName}</Botao>
}