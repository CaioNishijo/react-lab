export default function SignUp(){
    return <form onSubmit={(e) => {
            e.preventDefault()
            alert('Enviando!')
        }}>
        <input></input>
        <button>Enviar</button>
    </form>
}