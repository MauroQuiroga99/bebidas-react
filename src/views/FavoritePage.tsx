import { useSelector } from "react-redux";
import { getFavorites } from "../store/selectors/categories";
import DrinkCard from "../components/DrinkCard";

const FavoritePage = () => {
  const favorites = useSelector(getFavorites);

  return (
    <>
      <h1 className="text-6xl font-extrabold">Favoritos</h1>
      <div className=" mx-9 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
        {favorites.map((drink) => (
          <DrinkCard key={drink.idDrink} drink={drink} />
        ))}
      </div>
    </>
  );
};

export default FavoritePage;
