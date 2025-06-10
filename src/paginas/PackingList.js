function Item({ name, isPacked }){
    let itemContent = name

    if(isPacked){
        itemContent = (
            <del>
                name + " ✔"
            </del>
        )
    }

    return(
        <li className="item">
            {itemContent}
        </li>
    )
}

export default function PackingList(){
    return(
        <section>
            <h1>Fulano's packlist</h1>
            <ul>
                <Item name={"calça"} isPacked={true} />
                <Item name={"camiseta"} isPacked={true} />
                <Item name={"chinelo"} isPacked={false} />
            </ul>
        </section>
    )
}