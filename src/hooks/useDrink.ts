import { useDispatch } from "react-redux";
import axios from "axios";
import { setCategories } from "../store/slices/recipeSlice";

export default function useDrink() {
  const dispatch = useDispatch();
  async function callCategories() {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
    const { data } = await axios(url);
    const result = data.drinks.map((item: any) => item.strCategory);
    dispatch(setCategories(result));
  }
  return {
    callCategories,
  };
}
