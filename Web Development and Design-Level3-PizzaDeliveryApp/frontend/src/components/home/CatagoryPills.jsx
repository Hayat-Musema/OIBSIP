const categories = [
  "Signature",
  "Classic",
  "Vegan",
  "Spicy",
];

const CategoryPills = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category}
            className="px-6 py-3 rounded-full border  hover:bg-black-700 hover:text-white  transition duration-300"
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
};

export default CategoryPills;