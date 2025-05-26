import { sculptureList } from "../dados/data";
import { useState } from 'react';

export default function GalleryList(){
    const [index, setIndex] = useState(0)
    const [showMore, setShowMore] = useState(false)

    function handleClick(){
        setIndex(index + 1)
    }

    function handleMoreClick(){
        setShowMore(!showMore)
    }

    let sculpture = sculptureList[index]

    return(
        <>
            <button onClick={handleClick}>
                Próximo
            </button>
            <h2>
                <i>{sculpture.name}</i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} de {sculptureList.length})
            </h3>
            <button onClick={handleMoreClick}>{showMore ? "esconder" : "mostrar"}</button>
            <img src={sculpture.url} alt={sculpture.alt} />
            {showMore && <p>{sculpture.description}</p>}
        </>
    )
}