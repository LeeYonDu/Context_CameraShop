import { Navigate, useNavigate, useParams } from "react-router";
import { data } from "../data";

export default function Detail() {
  const params = useParams();
  const currentItem = data.find((item) => item.id === +params.id);
  const navigate = useNavigate();
  return (
    <div className=" w-screen flex justify-center items-center">
      <div className="w-[500px] aspect-[4/5] bg-white flex justify-center items-center flex-col gap-10 rounded-[20px] px-10 py-10 relative">
        <button
          className="absolute top-2 right-2 bg-black/0"
          onClick={() => navigate("/")}
        >
          ❌
        </button>
        <img
          src={currentItem.image}
          alt={currentItem.name}
          className="w-[100%] h-auto"
        />
        <p className="text-4xl">{currentItem.name}</p>
        <p className="text-4xl">₩ {currentItem.price.toLocaleString()}</p>
      </div>
    </div>
  );
}
