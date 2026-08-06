import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LogIn, Menu as MenuIcon, ShoppingBag, X } from "lucide-react";

const navItems = [
  { label: "Menu", path: "/menu" },
  { label: "Deals", path: "/deals" },
  { label: "Track Order", path: "/track-order" },
];

const linkClass = ({ isActive }) =>
  `text-sm font-bold transition hover:text-[#e2361d] ${
    isActive ? "text-[#e2361d]" : "text-[#5f5048]"
  }`;

const mobileLinkClass = ({ isActive }) =>
  `rounded-2xl px-4 py-3 text-sm font-black transition ${
    isActive
      ? "bg-[#e2361d] text-white"
      : "bg-[#fff8f3] text-[#201510] hover:text-[#e2361d]"
  }`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#f0e4d9] bg-[#fffaf6]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="flex items-center gap-3 text-[#201510]"
          onClick={() => setIsOpen(false)}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e2361d] text-lg font-black text-white shadow-[0_12px_26px_rgba(226,54,29,0.25)]">
            P
          </span>
          <span className="text-2xl font-black tracking-tight">PizzaVerse</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <NavLink
            to="/cart"
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-[#eadfd4] bg-white text-[#201510] transition hover:-translate-y-0.5 hover:border-[#e2361d] hover:text-[#e2361d] sm:flex"
            aria-label="Open cart"
          >
            <ShoppingBag size={19} />
          </NavLink>

          <NavLink
            to="/login"
            className="inline-flex items-center gap-2 rounded-full bg-[#201510] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#e2361d]"
          >
            <LogIn size={17} />
            Login
          </NavLink>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#eadfd4] bg-white text-[#201510] md:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={21} /> : <MenuIcon size={21} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav
          id="mobile-navigation"
          className="mx-auto grid max-w-7xl gap-2 border-t border-[#f0e4d9] px-6 py-4 md:hidden"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={mobileLinkClass}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/cart"
            className={mobileLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Cart
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
