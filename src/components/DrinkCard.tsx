import { ResponseDrink } from "../types";
type DrinkCardProps = {
  drink: ResponseDrink;
};

const DrinkCard = ({ drink }: DrinkCardProps) => {
  const handleClick = (id: string) => {
    console.log("desdenhandleClick", id);
  };
  return (
    <div className="border shadow-lg">
      <div className=" overflow-hidden">
        <img
          className="hover:scale-125 transition-transform hover:rotate-2"
          src={drink.strDrinkThumb}
          alt={`Imagen de ${drink.strDrink}`}
        />
      </div>
      <div className="p-5">
        <h2 className="text-2xl truncate font-black"> {drink.strDrink} </h2>
        <button
          type="button"
          className="bg-orange-400  hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg "
          onClick={() => handleClick(drink.idDrink)}
        >
          {" "}
          Ver Receta
        </button>
      </div>
    </div>
  );
};

export default DrinkCard;
