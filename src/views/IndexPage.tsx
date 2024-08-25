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
        <div className=" grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10 ">
          {drinks.map((drink) => (
            <DrinkCard key={drink.idDrink} drink={drink} />
          ))}
        </div>
      ) : (
        <p>{""} </p>
      )}
    </>
  );
};

export default IndexPage;
