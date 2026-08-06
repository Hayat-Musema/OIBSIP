import { Clock3, Leaf, Route, Sparkles } from "lucide-react";
import PageHeader from "../components/common/PageHeader";

const values = [
  {
    title: "48-hour dough",
    description: "Slow fermented sourdough gives every crust deep flavor and a light bite.",
    icon: Sparkles,
  },
  {
    title: "Local-first produce",
    description: "Vegetables, herbs, and cheeses are selected for freshness and consistency.",
    icon: Leaf,
  },
  {
    title: "Smart routing",
    description: "Delivery timing is designed around hot arrivals and reliable handoffs.",
    icon: Route,
  },
  {
    title: "20-minute standard",
    description: "The whole PizzaVerse flow is tuned for premium speed without cutting craft.",
    icon: Clock3,
  },
];

const About = () => {
  return (
    <div className="bg-[#fff8f3]">
      <section className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <PageHeader
          eyebrow="Our Story"
          title="Pizza craft, engineered for delivery."
          subtitle="PizzaVerse blends sourdough tradition, thoughtful toppings, and a modern ordering experience inspired by the original Stitch design."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article
                key={value.title}
                className="rounded-[2rem] border border-[#f0e4d9] bg-white p-6 shadow-[0_20px_60px_rgba(32,21,16,0.06)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e2361d] text-white">
                  <Icon size={22} />
                </div>
                <h2 className="mt-6 text-xl font-black text-[#201510]">
                  {value.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#76665c]">
                  {value.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 rounded-[2.5rem] bg-[#201510] p-8 text-white shadow-[0_28px_90px_rgba(32,21,16,0.2)] lg:p-10">
          <p className="max-w-4xl text-2xl font-black leading-tight tracking-tight sm:text-3xl">
            The first uploaded Stitch design sets the tone: warm cream surfaces,
            deep espresso text, confident red actions, rounded premium panels,
            and generous whitespace.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
