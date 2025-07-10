import { data } from "../data"
import { Item } from "./item"

export const ItemList = () => {

    return(
        <div className="flex justify-center flex-wrap gap-2 w-full">
            {data.map((datum) => (<Item {...datum} />))}
        </div>
    )
}