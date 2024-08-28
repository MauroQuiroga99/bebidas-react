export type Drink = {
  strCategory: string;
};

export type FormDrink = {
  category: string;
  ingredient: string;
};

export type ResponseDrink = {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
};

export type RecipeAPIResponse = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
  strIngredient1: string | null;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strMeasure1: string | null;
  strMeasure2: string | null;
  strMeasure3: string | null;
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
};

export type RecipeAPIData = {
  drinks: RecipeAPIResponse[];
};

export type Notification = {
  text: string;
  error: boolean;
  show: boolean;
};
