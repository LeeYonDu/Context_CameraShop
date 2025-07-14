import { useNavigate, useParams } from "react-router";
import { data } from "../data";

export default function Detail() {
  const params = useParams();
  const currentItem = data.find((item) => item.id === +params.id);
  const navigate = useNavigate();

  return (
    <div className="w-screen min-h-screen flex justify-center items-center bg-gradient-to-b from-[#000000b7] to-[#33333336]">
      <div className="w-full max-w-[400px] aspect-[4/5] bg-white flex flex-col justify-center items-center gap-10 rounded-[20px] px-10 py-10 relative shadow-md">
        <button
          className="absolute top-2 right-2 text-red-500 text-xl border border-transparent hover:border-red-500 rounded"
          onClick={() => navigate("/")}
        >
          ❌
        </button>
        <img
          src={currentItem.image}
          alt={currentItem.name}
          className="w-full h-auto"
        />
        <p className="text-2xl text-center font-semibold">{currentItem.name}</p>
        <p className="text-2xl text-center text-gray-700">
          ₩ {currentItem.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
