export default function CliqueEmMim({ message, children }){
    return <button onClick={() => {alert(message)}}>{children}</button>

}

