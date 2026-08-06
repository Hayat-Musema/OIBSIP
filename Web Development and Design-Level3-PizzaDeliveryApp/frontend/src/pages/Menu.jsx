import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpDown, Flame, Search, SlidersHorizontal, Star } from "lucide-react";
import Button from "../components/common/Button";
import RatingBadge from "../components/common/RatingBadge";
import { pizzaCategories, pizzas } from "../data/pizzaData";

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Highest Rated", value: "rating-desc" },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  const filteredPizzas = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return pizzas
      .filter((pizza) => {
        const matchesCategory =
          activeCategory === "All" || pizza.category === activeCategory;
        const matchesSearch =
          pizza.title.toLowerCase().includes(normalizedQuery) ||
          pizza.description.toLowerCase().includes(normalizedQuery) ||
          pizza.ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(normalizedQuery)
          );

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        if (sortBy === "rating-desc") return b.rating - a.rating;
        return b.reviews - a.reviews;
      });
  }, [activeCategory, query, sortBy]);

  return (
    <div className="bg-[#fff8f3]">
      <section className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <span className="inline-flex rounded-full border border-[#ffd8c7] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#e2361d]">
              PizzaVerse Menu
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight tracking-tight text-[#201510] sm:text-5xl lg:text-6xl">
              Choose your next perfect slice.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#6f5e54]">
              Browse signature recipes, comfort classics, plant-based favorites,
              and heat-forward pies built for fast premium delivery.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#f0e4d9] bg-white p-4 shadow-[0_22px_70px_rgba(32,21,16,0.08)]">
            <div className="grid gap-3 md:grid-cols-[1fr_220px]">
              <label className="relative block">
                <span className="sr-only">Search pizzas</span>
                <Search
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#9b8a7f]"
                  size={20}
                />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  type="search"
                  placeholder="Search pizzas, toppings..."
                  className="h-14 w-full rounded-full border border-[#eadfd4] bg-[#fffaf6] pl-12 pr-4 text-sm font-semibold text-[#201510] outline-none transition focus:border-[#e2361d] focus:ring-4 focus:ring-[#e2361d]/10"
                />
              </label>

              <label className="relative block">
                <span className="sr-only">Sort menu</span>
                <ArrowUpDown
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#9b8a7f]"
                  size={18}
                />
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="h-14 w-full appearance-none rounded-full border border-[#eadfd4] bg-[#fffaf6] pl-11 pr-4 text-sm font-bold text-[#201510] outline-none transition focus:border-[#e2361d] focus:ring-4 focus:ring-[#e2361d]/10"
                  aria-label="Sort pizzas"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#201510] px-4 py-3 text-sm font-black text-white">
            <SlidersHorizontal size={17} />
            Categories
          </span>
          {pizzaCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`rounded-full border px-5 py-3 text-sm font-black transition duration-300 focus:outline-none focus:ring-4 focus:ring-[#e2361d]/15 ${
                activeCategory === category
                  ? "border-[#e2361d] bg-[#e2361d] text-white shadow-[0_14px_28px_rgba(226,54,29,0.22)]"
                  : "border-[#eadfd4] bg-white text-[#201510] hover:-translate-y-0.5 hover:border-[#e2361d]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between gap-4">
          <p className="text-sm font-bold text-[#76665c]">
            Showing {filteredPizzas.length} of {pizzas.length} pizzas
          </p>
          <p className="hidden text-sm font-bold text-[#76665c] sm:block">
            Freshly prepared. Delivery-ready in under 20 minutes.
          </p>
        </div>

        {filteredPizzas.length > 0 ? (
          <div className="mt-8 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {filteredPizzas.map((pizza) => (
              <article
                key={pizza.id}
                className="group overflow-hidden rounded-[2rem] border border-[#f0e4d9] bg-white shadow-[0_24px_70px_rgba(32,21,16,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(32,21,16,0.14)]"
              >
                <Link to={`/menu/${pizza.id}`} className="block">
                  <div className="relative bg-[#fff0e6] px-6 pt-8">
                    <img
                      src={pizza.image}
                      alt={pizza.title}
                      className="h-56 w-full object-contain transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute right-5 top-5">
                      <RatingBadge rating={pizza.rating} />
                    </div>
                    <div className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-black text-[#e2361d] shadow-sm">
                      {pizza.category}
                    </div>
                  </div>
                </Link>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Link
                        to={`/menu/${pizza.id}`}
                        className="text-2xl font-black tracking-tight text-[#201510] transition hover:text-[#e2361d]"
                      >
                        {pizza.title}
                      </Link>
                      <div className="mt-2 flex items-center gap-3 text-xs font-black uppercase tracking-[0.12em] text-[#a69388]">
                        <span>{pizza.prepTime}</span>
                        <span className="flex items-center gap-1">
                          <Flame size={13} />
                          {pizza.spiceLevel}
                        </span>
                      </div>
                    </div>
                    <span className="text-2xl font-black text-[#e2361d]">
                      ${pizza.price}
                    </span>
                  </div>

                  <p className="mt-4 min-h-20 text-sm leading-6 text-[#76665c]">
                    {pizza.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {pizza.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#fff8f3] px-3 py-1.5 text-xs font-bold text-[#76665c]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 grid grid-cols-[1fr_auto] gap-3">
                    <Button className="w-full">Add to Cart</Button>
                    <Link
                      to={`/menu/${pizza.id}`}
                      className="inline-flex h-12 items-center justify-center rounded-full border border-[#eadfd4] px-5 text-sm font-black text-[#201510] transition hover:border-[#e2361d] hover:text-[#e2361d]"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-[2rem] border border-dashed border-[#e6d4c7] bg-white px-6 py-16 text-center">
            <Star className="mx-auto text-[#e2361d]" size={34} />
            <h2 className="mt-5 text-2xl font-black text-[#201510]">
              No pizzas found
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[#76665c]">
              Try another category or search for a different ingredient.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Menu;
