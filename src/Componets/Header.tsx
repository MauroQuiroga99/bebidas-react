import { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  console.log(pathname);

  const isHome = useMemo(() => pathname === "/", [pathname]);
  console.log(isHome);

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
          <form className=" md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6">
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
                name="ingredient"
              >
                <option value="">--Seleccione--</option>
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
