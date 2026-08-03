import { NavLink, Link } from "react-router-dom";


const Navbar = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-red-700"
        >
          PizzaVerse
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">

  <NavLink to="/menu">Menu</NavLink>

  <NavLink to="/deals">Deals</NavLink>

  <NavLink to="/track-order">Track Order</NavLink>

</nav>

        {/* Right Buttons */}

        <div className="flex items-center gap-4">

        <NavLink
  to="/login"
  className="font-medium hover:text-red-700 transition">
  Login
</NavLink>

          

        </div>

      </div>
    </header>
  );
};

export default Navbar;