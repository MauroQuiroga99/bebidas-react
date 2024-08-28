import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setCategories, setDrinks } from "../store/slices/recipeSlice";
import { FormDrink, ResponseDrink } from "../types";
import { getCategories } from "../store/selectors/categories";

export default function useDrink() {
  const dispatch = useDispatch();
  const categories = useSelector(getCategories);

  async function callCategories() {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
    const { data } = await axios(url);
    const result = data.drinks.map((item: any) => item.strCategory);
    dispatch(setCategories(result));
  }

  async function callDataApi(categories: FormDrink) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categories.category}&i=${categories.ingredient}`;
    const { data } = await axios(url);
    const result = data.drinks.map((item: ResponseDrink) => item);
    dispatch(setDrinks(result));
    console.log(url);
  }

  return {
    callCategories,
    callDataApi,
    categories,
  };
}
