import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Notification from "../components/Notification";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setFavorites } from "../store/slices/recipeSlice";

const Layout = () => {
  const dispatch = useDispatch();

  const loadFavorites = () => {
    const storageFav = localStorage.getItem("fav");
    if (storageFav !== null) {
      const favoritos = JSON.parse(storageFav);
      dispatch(setFavorites(favoritos));
    }
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  return (
    <>
      <Header />
      <main className="container mx-auto py-16">
        <Outlet />
      </main>
      <Modal />
      <Notification />
    </>
  );
};

export default Layout;
