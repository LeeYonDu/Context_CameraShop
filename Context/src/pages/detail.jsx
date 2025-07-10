import { useParams } from "react-router-dom";
import { data } from "../data";

export default function Detail () {

    const params = useParams();
    const currentItem = data.find((camera) => camera.id === +params.id);

return (

    <div>
        <img src={currentItem.image} alt={currentItem.name} className="h-20" />
        <p>{currentItem.name}</p>
        <p>₩{currentItem.price.toLocaleString()}</p>
    </div>

)

};