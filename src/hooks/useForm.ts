import { useDispatch, useSelector } from "react-redux";
import { getIngredients } from "../store/selectors/categories";
import useDrink from "./useDrink";
import { setIngredients, setNotification } from "../store/slices/recipeSlice";
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
      dispatch(
        setNotification({
          text: "Todos los campos son obligatorios",
          error: true, // Muestra el ícono de error
        })
      );
      return;
    }
    callDataApi(ingredients);
  };

  return {
    handleChange,
    handleSubmit,
    ingredients,
  };
}
