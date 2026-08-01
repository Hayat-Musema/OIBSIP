import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-red-600"
        >
          🍕 PizzaVerse
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 font-semibold"
                : "text-gray-700 hover:text-red-600 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/menu"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 font-semibold"
                : "text-gray-700 hover:text-red-600 transition"
            }
          >
            Menu
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 font-semibold"
                : "text-gray-700 hover:text-red-600 transition"
            }
          >
            Cart
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 font-semibold"
                : "text-gray-700 hover:text-red-600 transition"
            }
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive
                ? "bg-red-600 text-white px-4 py-2 rounded-lg"
                : "bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            }
          >
            Register
          </NavLink>

        </nav>

      </div>
    </header>
  );
};

export default Navbar;