import { data } from "../data";
import { Item } from "./item";

export const ItemList = ({ setNumberOfItemsInCart }) => {
  return (
    <div className="mt-40 mb-40 w-screen flex justify-center items-center">
      <div className="grid grid-cols-4 gap-x-40 gap-y-10">
        {data.map((datum) => (
          <Item
            key={datum.id}
            {...datum}
            setNumberOfItemsInCart={setNumberOfItemsInCart}
          />
        ))}
      </div>
    </div>
  );
};
