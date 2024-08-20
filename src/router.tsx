import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./views/IndexPage";
import FavoritePage from "./views/FavoritePage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/favoritos" element={<FavoritePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
