import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import Modal from "../components/common/Modal";
import { cartItems } from "../data/cartData";

const Cart = () => {
  const [items, setItems] = useState(cartItems);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const subtotal = useMemo(
    () =>
      items.reduce(
        (total, item) => total + item.pizza.price * item.quantity,
        0
      ),
    [items]
  );
  const deliveryFee = items.length ? 4 : 0;
  const serviceFee = items.length ? 2 : 0;
  const discount = subtotal >= 60 ? 8 : 0;
  const total = subtotal + deliveryFee + serviceFee - discount;

  const updateQuantity = (pizzaId, amount) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.pizza.id === pizzaId
          ? {
              ...item,
              quantity: Math.min(9, Math.max(1, item.quantity + amount)),
            }
          : item
      )
    );
  };

  const removeItem = (pizzaId) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.pizza.id !== pizzaId)
    );
  };

  if (!items.length) {
    return (
      <div className="bg-[#fff8f3]">
        <section className="mx-auto flex min-h-[calc(100vh-180px)] max-w-4xl items-center justify-center px-6 py-16">
          <div className="rounded-[2.5rem] border border-dashed border-[#e6d4c7] bg-white px-6 py-16 text-center shadow-[0_24px_70px_rgba(32,21,16,0.08)] sm:px-12">
            <ShoppingBag className="mx-auto text-[#e2361d]" size={44} />
            <h1 className="mt-6 text-4xl font-black tracking-tight text-[#201510]">
              Your cart is empty
            </h1>
            <p className="mx-auto mt-4 max-w-md leading-7 text-[#76665c]">
              Add a few PizzaVerse favorites and they will appear here before
              checkout.
            </p>
            <Link to="/menu">
              <Button className="mt-8">Browse Menu</Button>
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-[#fff8f3]">
      <section className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <span className="inline-flex rounded-full border border-[#ffd8c7] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#e2361d]">
              Checkout
            </span>
            <h1 className="mt-6 text-4xl font-black tracking-tight text-[#201510] sm:text-5xl">
              Your cart
            </h1>
            <p className="mt-3 text-[#76665c]">
              Review your selections before checkout.
            </p>
          </div>
          <button
            onClick={() => setIsConfirmOpen(true)}
            className="inline-flex items-center gap-2 rounded-full border border-[#eadfd4] bg-white px-5 py-3 text-sm font-black text-[#201510] transition hover:border-[#e2361d] hover:text-[#e2361d]"
          >
            <Trash2 size={17} />
            Clear Cart
          </button>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_390px] lg:items-start">
          <div className="space-y-5">
            {items.map((item) => (
              <article
                key={item.pizza.id}
                className="grid gap-5 rounded-[2rem] border border-[#f0e4d9] bg-white p-5 shadow-[0_20px_60px_rgba(32,21,16,0.06)] sm:grid-cols-[150px_1fr_auto]"
              >
                <div className="rounded-[1.5rem] bg-[#fff0e6] p-4">
                  <img
                    src={item.pizza.image}
                    alt={item.pizza.title}
                    className="h-32 w-full object-contain"
                  />
                </div>

                <div>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h2 className="text-2xl font-black text-[#201510]">
                        {item.pizza.title}
                      </h2>
                      <p className="mt-1 text-sm font-bold text-[#a69388]">
                        {item.size} / {item.pizza.category}
                      </p>
                    </div>
                    <p className="text-2xl font-black text-[#e2361d] sm:hidden">
                      ${item.pizza.price * item.quantity}
                    </p>
                  </div>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-[#76665c]">
                    {item.pizza.description}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-4">
                    <div className="flex items-center rounded-full border border-[#eadfd4] bg-[#fffaf6] p-1">
                      <button
                        onClick={() => updateQuantity(item.pizza.id, -1)}
                        className="flex h-10 w-10 items-center justify-center rounded-full text-[#201510] transition hover:bg-white"
                        aria-label={`Decrease ${item.pizza.title} quantity`}
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-10 text-center font-black text-[#201510]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.pizza.id, 1)}
                        className="flex h-10 w-10 items-center justify-center rounded-full text-[#201510] transition hover:bg-white"
                        aria-label={`Increase ${item.pizza.title} quantity`}
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.pizza.id)}
                      className="inline-flex items-center gap-2 text-sm font-black text-[#e2361d] transition hover:text-[#201510]"
                    >
                      <Trash2 size={16} />
                      Remove
                    </button>
                  </div>
                </div>

                <div className="hidden text-right sm:block">
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-[#a69388]">
                    Item total
                  </p>
                  <p className="mt-2 text-2xl font-black text-[#e2361d]">
                    ${item.pizza.price * item.quantity}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <aside className="sticky top-28 rounded-[2rem] border border-[#f0e4d9] bg-white p-6 shadow-[0_24px_70px_rgba(32,21,16,0.08)]">
            <h2 className="text-2xl font-black tracking-tight text-[#201510]">
              Order Summary
            </h2>
            <div className="mt-6 space-y-4 text-sm font-bold text-[#76665c]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-[#201510]">${subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span className="text-[#201510]">${deliveryFee}</span>
              </div>
              <div className="flex justify-between">
                <span>Service fee</span>
                <span className="text-[#201510]">${serviceFee}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-[#e2361d]">-${discount}</span>
              </div>
            </div>

            <div className="mt-6 border-t border-[#eadfd4] pt-6">
              <div className="flex items-center justify-between">
                <span className="text-lg font-black text-[#201510]">Total</span>
                <span className="text-3xl font-black text-[#e2361d]">
                  ${total}
                </span>
              </div>
              <Button className="mt-6 min-h-14 w-full">Checkout</Button>
            </div>
          </aside>
        </div>
      </section>

      <Modal
        isOpen={isConfirmOpen}
        title="Clear your cart?"
        onClose={() => setIsConfirmOpen(false)}
      >
        <p className="leading-7 text-[#76665c]">
          This removes every item from your current demo cart.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <Button variant="secondary" onClick={() => setIsConfirmOpen(false)}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              setItems([]);
              setIsConfirmOpen(false);
            }}
          >
            Clear
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Cart;
