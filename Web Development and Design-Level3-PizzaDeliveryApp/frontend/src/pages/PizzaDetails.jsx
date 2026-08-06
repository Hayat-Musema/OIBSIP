import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Clock3,
  Flame,
  Minus,
  Plus,
  ShoppingCart,
  Star,
} from "lucide-react";
import { useMemo, useState } from "react";
import Button from "../components/common/Button";
import RatingBadge from "../components/common/RatingBadge";
import { pizzas } from "../data/pizzaData";

const PizzaDetails = () => {
  const { pizzaId } = useParams();
  const [quantity, setQuantity] = useState(1);

  const pizza = pizzas.find((item) => item.id === pizzaId) || pizzas[0];

  const relatedPizzas = useMemo(
    () =>
      pizzas
        .filter((item) => item.category === pizza.category && item.id !== pizza.id)
        .slice(0, 3),
    [pizza]
  );
  const displayedPizzas = relatedPizzas.length ? relatedPizzas : pizzas.slice(0, 3);

  const subtotal = pizza.price * quantity;

  return (
    <div className="bg-[#fff8f3]">
      <section className="mx-auto max-w-7xl px-6 py-10 lg:py-16">
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 text-sm font-black text-[#76665c] transition hover:text-[#e2361d]"
        >
          <ArrowLeft size={18} />
          Back to Menu
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-start">
          <div className="relative rounded-[2.5rem] border border-[#f0e4d9] bg-white p-6 shadow-[0_28px_90px_rgba(32,21,16,0.08)]">
            <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-[2rem] bg-[#fff0e6] p-8 sm:min-h-[520px]">
              <div className="absolute h-[72%] w-[72%] rounded-full bg-[#ffe0cf]" />
              <img
                src={pizza.image}
                alt={pizza.title}
                className="relative z-10 max-h-[430px] w-full object-contain drop-shadow-[0_34px_34px_rgba(64,31,17,0.2)]"
              />
              <div className="absolute right-5 top-5 z-20">
                <RatingBadge rating={pizza.rating} />
              </div>
            </div>
          </div>

          <div>
            <span className="inline-flex rounded-full border border-[#ffd8c7] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#e2361d]">
              {pizza.category}
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-[#201510] sm:text-5xl">
              {pizza.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm font-bold text-[#76665c]">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2">
                <Star size={17} className="fill-[#f7b731] text-[#f7b731]" />
                {pizza.rating} rating ({pizza.reviews} reviews)
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2">
                <Clock3 size={17} />
                {pizza.prepTime}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2">
                <Flame size={17} />
                {pizza.spiceLevel}
              </span>
            </div>

            <p className="mt-6 text-lg leading-8 text-[#6f5e54]">
              {pizza.description}
            </p>

            <div className="mt-8 rounded-[2rem] border border-[#f0e4d9] bg-white p-6 shadow-[0_20px_60px_rgba(32,21,16,0.06)]">
              <h2 className="text-lg font-black text-[#201510]">Ingredients</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {pizza.ingredients.map((ingredient) => (
                  <span
                    key={ingredient}
                    className="rounded-full bg-[#fff8f3] px-4 py-2 text-sm font-bold text-[#76665c]"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-[2rem] border border-[#f0e4d9] bg-white p-6 shadow-[0_20px_60px_rgba(32,21,16,0.06)]">
              <div className="flex flex-wrap items-center justify-between gap-5">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-[#a69388]">
                    Total
                  </p>
                  <p className="mt-1 text-4xl font-black text-[#e2361d]">
                    ${subtotal}
                  </p>
                </div>

                <div className="flex items-center rounded-full border border-[#eadfd4] bg-[#fffaf6] p-1">
                  <button
                    onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                    className="flex h-11 w-11 items-center justify-center rounded-full text-[#201510] transition hover:bg-white"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={17} />
                  </button>
                  <span className="w-12 text-center text-lg font-black text-[#201510]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((value) => Math.min(9, value + 1))}
                    className="flex h-11 w-11 items-center justify-center rounded-full text-[#201510] transition hover:bg-white"
                    aria-label="Increase quantity"
                  >
                    <Plus size={17} />
                  </button>
                </div>
              </div>

              <Button className="mt-6 w-full">
                <ShoppingCart size={18} />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-[#201510]">
                Related pizzas
              </h2>
              <p className="mt-2 text-[#76665c]">
                More {pizza.category.toLowerCase()} favorites from PizzaVerse.
              </p>
            </div>
            <Link
              to="/menu"
              className="text-sm font-black text-[#e2361d] transition hover:text-[#201510]"
            >
              View full menu
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {displayedPizzas.map((item) => (
              <Link
                key={item.id}
                to={`/menu/${item.id}`}
                className="group rounded-[2rem] border border-[#f0e4d9] bg-white p-5 shadow-[0_20px_60px_rgba(32,21,16,0.06)] transition hover:-translate-y-1"
              >
                <div className="rounded-[1.5rem] bg-[#fff0e6] p-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-40 w-full object-contain transition group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-black text-[#201510]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm font-bold text-[#76665c]">
                      {item.rating} rating
                    </p>
                  </div>
                  <span className="text-xl font-black text-[#e2361d]">
                    ${item.price}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};

export default PizzaDetails;
