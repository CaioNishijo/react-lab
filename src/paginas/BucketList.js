import { useState } from 'react'

let nextId = 3
const initialList = [
    { id: 0, title: 'Big Bellies'},
    { id: 1, title: 'Lunar Landscape'},
    { id: 2, title: 'Terracota Army'}
]

export default function BucketList(){
    const [myList, setMyList] = useState(initialList)
    const [yourList, setYourList] = useState(initialList)

    function handleToggleMyList(artworkId, nextSeen){
        setMyList(myList.map(artwork => {
            if(artwork.id === artworkId){
                return { ...artwork, seen: nextSeen}
            } else{
                return artwork
            }
        }))
    }

    function handleToggleYourList(artworkId, nextSeen){
        setYourList(yourList.map(artwork => {
            if(artwork.id === artworkId){
                return { ...artwork, seen: nextSeen}
            } else{
                return artwork
            }
        }))
    }

    return(
        <>
            <h1>Art Bucket List</h1>
            <h2>My list of art to see</h2>
            <ItemList 
                artwork={myList}
                onToggle={handleToggleMyList}
            />
            <h2>Your list of art to see</h2>
            <ItemList 
                artwork={yourList}
                onToggle={handleToggleYourList}
            />
        </>
    )

    function ItemList({ artwork, onToggle }){
        return(
            <ul>
                {artwork.map(artwork => (
                    <li key={artwork.id}>
                        <label>
                            <input 
                                type="checkbox"
                                checked={artwork.seen}
                                onChange={e => {
                                    onToggle(
                                        artwork.id,
                                        e.target.checked
                                    )
                                }}
                            />
                            {artwork.title}
                        </label>
                    </li>
                ))}
            </ul>
        )
    }
}