import Botao from "./Botao"

export default function Toolbar()
{
    return <div className="toolbar" onClick={() => {alert('You clicked the toolbar')}}>
            
            <Botao onClick={() => {alert('Playing!')}}>Play movie</Botao>
            <Botao onClick={() => {alert('Upload image')}}>Upload image</Botao>
            </div>
}