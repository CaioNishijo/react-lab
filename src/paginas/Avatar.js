import { getImageUrl } from "./Utils"
import i from "../img/YfeOqp2.jpeg"

export default function Avatar({ person, size = 100 }){
    return <img
        className="Avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
    />
}