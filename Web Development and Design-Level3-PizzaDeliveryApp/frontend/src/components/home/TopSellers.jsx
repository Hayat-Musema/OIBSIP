import SectionTitle from "../common/SectionTitle";
import ProductCard from "../product/ProductCard";
import pizzas from "../../assets/data/pizzas";

const TopSellers = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <SectionTitle
        title="Top Sellers"
        subtitle="Discover our customers' favorite handcrafted pizzas."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pizzas.slice(0, 3).map((pizza) => (
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

    </section>
  );
};

export default TopSellers;