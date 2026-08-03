import SectionTitle from "../common/SectionTitle";

const Journey = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <SectionTitle
        title="The PizzaVerse Journey"
        subtitle="Every pizza begins with carefully selected ingredients and ends with a memorable dining experience."
      />

      <div className="grid md:grid-cols-3 gap-10">

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold">
            Fresh Ingredients
          </h3>

          <p className="text-gray-500 mt-4">
            We source premium vegetables, cheeses and meats from trusted local suppliers.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold">
            ① Order
          </h3>

          <p className="text-gray-500 mt-4">
          Select from our curated menu 
          of tech perfected pizzas.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold">
           ② Prepare
          </h3>

          <p className="text-gray-500 mt-4">
           Our chefs and smart-ovens
           coordinate for precision baking.
          </p>
        </div>
         
         <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-semibold">
           ③ Delivery
          </h3>

          <p className="text-gray-500 mt-4">
           Our AI routing ensures
           your pizza arrives piping hot.
          </p>
        </div>
      </div>

    </section>
  );
};

export default Journey;