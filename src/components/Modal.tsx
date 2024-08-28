import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFavorites,
  getModalState,
  getRecipes,
} from "../store/selectors/categories";
import {
  closeModal,
  setFavorites,
  setNotification,
} from "../store/slices/recipeSlice";
import { RecipeAPIResponse } from "../types";

export default function Modal() {
  const dispatch = useDispatch();
  const modal = useSelector(getModalState);
  const recipes = useSelector(getRecipes);
  const favoritos = useSelector(getFavorites);

  const renderIngredients = () => {
    if (!recipes) return null;

    const ingredients: JSX.Element[] = [];
    for (let i = 1; i <= 6; i++) {
      const ingredient =
        recipes[`strIngredient${i}` as keyof RecipeAPIResponse];
      const measure = recipes[`strMeasure${i}` as keyof RecipeAPIResponse];

      if (ingredient || measure) {
        ingredients.push(
          <p className="text-lg font-normal" key={i}>
            {ingredient} {measure && `- ${measure}`}
          </p>
        );
      }
    }
    return <>{ingredients}</>;
  };

  const handleClickFavorite = (recipes: RecipeAPIResponse) => {
    if (favoritos.some((fav) => fav.idDrink === recipes.idDrink)) {
      dispatch(
        setFavorites(favoritos.filter((fav) => fav.idDrink !== recipes.idDrink))
      );
      dispatch(
        setNotification({
          text: `${recipes.strDrink} eliminado de favoritos`,
          error: false,
        })
      );
    } else {
      console.log("no existe");
      dispatch(setFavorites([...favoritos, recipes]));
      dispatch(
        setNotification({
          text: `${recipes.strDrink} agregado a favoritos`,
          error: false,
        })
      );
    }
    dispatch(closeModal());
  };

  const favoriteExist = (idDrink: string | undefined): boolean => {
    return favoritos.some((fav) => fav.idDrink === idDrink);
  };

  return (
    <>
      <Transition appear show={modal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => dispatch(closeModal())}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                  <Dialog.Title
                    as="h3"
                    className="text-gray-900 text-4xl font-extrabold my-5 text-center"
                  >
                    {recipes?.strDrink}
                  </Dialog.Title>
                  <img
                    src={recipes?.strDrinkThumb}
                    alt={`imagen de ${recipes?.strDrink}`}
                    className="mx-auto w-96"
                  />

                  <Dialog.Title
                    as="h3"
                    className="text-gray-900 text-2xl font-extrabold my-5"
                  >
                    Ingredientes y Cantidades
                  </Dialog.Title>
                  {renderIngredients()}
                  <Dialog.Title
                    as="h3"
                    className="text-gray-900 text-2xl font-extrabold my-5"
                  >
                    Instrucciones
                  </Dialog.Title>
                  <p className="text-lg"> {recipes?.strInstructions} </p>
                  <div className="mt-5 flex justify-between gap-4">
                    <button
                      type="button"
                      className="w-full rounded bg-gray-600 p-3 font-bold uppercase text-white shadow hover:bg-gray-500"
                      onClick={() => dispatch(closeModal())}
                    >
                      {" "}
                      Cerrar{" "}
                    </button>
                    <button
                      type="button"
                      className="w-full rounded bg-gray-600 p-3 font-bold uppercase text-white shadow hover:bg-gray-500"
                      onClick={() => {
                        if (recipes) {
                          handleClickFavorite(recipes);
                          dispatch(closeModal());
                        }
                      }}
                    >
                      {favoriteExist(recipes?.idDrink)
                        ? "Eliminar de Favoritos"
                        : "Agregar a Favoritos"}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
