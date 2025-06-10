function Cup({ guest }){
    guest = guest + 1
    return <h2>Copo de chá para convidado #{guest}</h2>
}

export default function TeaSet(){
    let cups = []
    for(let i = 0; i <= 5; i++){
        cups.push(<Cup key={i} guest={i}></Cup>)
    }

    return cups
}