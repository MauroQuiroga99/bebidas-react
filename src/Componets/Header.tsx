import { ChangeEvent, FormEvent, useEffect, useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getIngredients } from "../store/selectors/categories";
import useDrink from "../hooks/useDrink";
import { setIngredients } from "../store/slices/recipeSlice";
import { formDrink } from "../types";
import axios from "axios";

const Header = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getCategories);
  const ingredients = useSelector(getIngredients);
  const { callCategories } = useDrink();
  const { pathname } = useLocation();
  const isHome = useMemo(() => pathname === "/", [pathname]);

  useEffect(() => {
    callCategories();
  }, []);

  async function callDataApi(categories: formDrink) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categories.category}&i=${categories.ingredient}`;
    const { data } = await axios(url);
    console.log(data);
    console.log(url);
  }

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
    //Validar
    if (Object.values(ingredients).includes("")) {
      console.log("Todos los campos son obligatorios");
      return;
    }
    callDataApi(ingredients);

    //consultar las recetas
  };

  return (
    <header
      className={
        isHome
          ? " bg-center bg-cover bg-[url('/public/bg.jpg')]"
          : "bg-slate-800"
      }
    >
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center ">
          <div>
            <img className="w-32 " src="/logo.svg" alt="logotipo" />
          </div>
          <nav className="flex gap-4">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
              to="/"
            >
              Inicio
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
              to="/favoritos"
            >
              Favoritos
            </NavLink>
          </nav>
        </div>
        {isHome && (
          <form
            className=" md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="space-y-4">
              <label
                className="block text-white uppercase font-extrabold text-lg "
                htmlFor="ingredient"
              >
                Nombre o Ingredientes
              </label>
              <input
                id="ingredient"
                className="p-3 w-full rounded-lg focus:outline-none"
                name="ingredient"
                type="text"
                placeholder="Nombre o Ingrediente. Ej. Vodka, Tequila, Café"
                onChange={handleChange}
                value={ingredients.ingredient}
              />
            </div>
            <div className="space-y-4">
              <label
                className="block text-white uppercase font-extrabold text-lg "
                htmlFor="ingredient"
              >
                Categoría
              </label>
              <select
                id="category"
                className="p-3 w-full rounded-lg focus:outline-none"
                name="category"
                onChange={handleChange}
                value={ingredients.category}
              >
                <option className="bg-slate-200 p-2 rounded-md" value="">
                  --Seleccione--
                </option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {" "}
                    {category}{" "}
                  </option>
                ))}
              </select>
            </div>

            <input
              type="submit"
              value="Buscar Recetas"
              className=" p-2 cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full rounded-lg uppercase"
            />
          </form>
        )}
      </div>
    </header>
  );
};

export default Header;
