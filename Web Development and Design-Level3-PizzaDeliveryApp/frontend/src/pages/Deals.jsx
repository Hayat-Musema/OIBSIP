import { Link } from "react-router-dom";
import { BadgePercent, Clock3, Gift } from "lucide-react";
import Button from "../components/common/Button";
import PageHeader from "../components/common/PageHeader";

const deals = [
  {
    title: "Weeknight Orbit",
    description: "Any two classics, garlic dip, and sparkling soda.",
    price: 34,
    icon: BadgePercent,
  },
  {
    title: "Fast Lunch Drop",
    description: "A personal pizza and side ready for quick midday delivery.",
    price: 16,
    icon: Clock3,
  },
  {
    title: "Secret Menu Access",
    description: "Seasonal limited pie plus dessert for PizzaVerse regulars.",
    price: 29,
    icon: Gift,
  },
];

const Deals = () => {
  return (
    <div className="bg-[#fff8f3]">
      <section className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <PageHeader
          eyebrow="Deals"
          title="Premium offers without the template feel."
          subtitle="Curated PizzaVerse bundles with the same warm, premium finish as the original Stitch design."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {deals.map((deal) => {
            const Icon = deal.icon;

            return (
              <article
                key={deal.title}
                className="rounded-[2rem] border border-[#f0e4d9] bg-white p-7 shadow-[0_24px_70px_rgba(32,21,16,0.08)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e2361d] text-white">
                  <Icon size={24} />
                </div>
                <h2 className="mt-7 text-2xl font-black tracking-tight text-[#201510]">
                  {deal.title}
                </h2>
                <p className="mt-3 min-h-20 text-sm leading-6 text-[#76665c]">
                  {deal.description}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-3xl font-black text-[#e2361d]">
                    ${deal.price}
                  </span>
                  <Link to="/menu">
                    <Button variant="secondary">Order</Button>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Deals;
