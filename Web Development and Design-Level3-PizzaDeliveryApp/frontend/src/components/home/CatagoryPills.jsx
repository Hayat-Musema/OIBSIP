import { categories } from "../../data/homeData";

const CategoryPills = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              className="rounded-full border border-[#eadfd4] bg-[#fffaf6] px-6 py-3 text-sm font-black text-[#201510] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#e2361d] hover:bg-[#201510] hover:text-white focus:outline-none focus:ring-4 focus:ring-[#e2361d]/15"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryPills;
