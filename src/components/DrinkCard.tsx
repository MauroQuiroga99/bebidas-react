import axios from "axios";
import { RecipeAPIResponse, ResponseDrink } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../store/selectors/categories";
import { openModal, setRecipes } from "../store/slices/recipeSlice";

type DrinkCardProps = {
  drink: ResponseDrink;
};

const DrinkCard = ({ drink }: DrinkCardProps) => {
  const dispatch = useDispatch();
  const recipes = useSelector(getRecipes);

  const handleClick = (id: string) => {
    console.log("desdenhandleClick", id);
    callRecipesApi(id);
    dispatch(openModal());
  };

  async function callRecipesApi(id: string) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    const { data } = await axios(url);
    console.log(data);
    console.log(url);
    const result: RecipeAPIResponse = data.drinks[0];
    console.log(result);

    dispatch(setRecipes(result));
  }

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
