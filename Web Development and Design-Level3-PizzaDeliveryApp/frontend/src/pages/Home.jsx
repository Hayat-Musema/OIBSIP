import ProductCard from "../components/product/ProductCard";
import pizzas from "../assets/data/pizzas";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-6 grid md:grid-cols-3 gap-6">
      {pizzas.map((pizza) => (
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
  );
};

export default Home;