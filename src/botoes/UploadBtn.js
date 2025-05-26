import Botao from "./Botao"

export default function UploadBtn(){
    return <>
        <Botao onClick={() => {alert("Uploading!")}}>Upload image</Botao>
    </>
}