export default function Botao({onClick, children}){
    return <>
        <button onClick={(e) => {
            e.stopPropagation()
            onClick()
        }}>{children}</button>
    </>
}