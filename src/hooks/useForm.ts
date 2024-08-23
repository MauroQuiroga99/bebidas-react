import { useDispatch, useSelector } from "react-redux";
import { getIngredients } from "../store/selectors/categories";
import useDrink from "./useDrink";
import { setIngredients } from "../store/slices/recipeSlice";
import { ChangeEvent, FormEvent } from "react";

export default function useForm() {
  const dispatch = useDispatch();
  const ingredients = useSelector(getIngredients);
  const { callDataApi } = useDrink();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    dispatch(
      setIngredients({
        ...ingredients,
        [name]: value,
      })
    );
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validar
    if (Object.values(ingredients).includes("")) {
      console.log("Todos los campos son obligatorios");
      return;
    }
    callDataApi(ingredients);
  };

  //consultar las recetas
  return {
    handleChange,
    handleSubmit,
  };
}
