import { useMemo } from "react";
import { getDrinks } from "../store/selectors/categories";
import { useSelector } from "react-redux";
import DrinkCard from "../components/DrinkCard";

const IndexPage = () => {
  const drinks = useSelector(getDrinks);
  const hasDrinks = useMemo(() => drinks.length > 0, [drinks]);

  return (
    <>
      <h1 className="text-6xl font-extrabold">Recetas</h1>
      {hasDrinks ? (
        <>
          {drinks.map((drink) => (
            <DrinkCard key={drink.idDrink} drink={drink} />
          ))}
        </>
      ) : (
        <p>No hay nada</p>
      )}
    </>
  );
};

export default IndexPage;
