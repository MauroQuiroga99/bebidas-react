import { ResponseDrink } from "../types";
type DrinkCardProps = {
  drink: ResponseDrink;
};
const DrinkCard = ({ drink }: DrinkCardProps) => {
  return <h2>{drink.strDrink}</h2>;
};

export default DrinkCard;
