import SectionTitle from "../common/SectionTitle";
import ProductCard from "../product/ProductCard";
import { featuredPizzas } from "../../data/homeData";

const TopSellers = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <SectionTitle
          title="Top Sellers"
          subtitle="Voted most loved by our PizzaVerse community."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredPizzas.map((pizza) => (
            <ProductCard
              key={pizza.id}
              image={pizza.image}
              title={pizza.title}
              description={pizza.description}
              price={pizza.price}
              rating={pizza.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
