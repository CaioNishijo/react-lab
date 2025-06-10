import { getImageUrl } from "./Utils"

export default function Avatar({ person, size = 100 }){
    return <img
        className="Avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
    />
}