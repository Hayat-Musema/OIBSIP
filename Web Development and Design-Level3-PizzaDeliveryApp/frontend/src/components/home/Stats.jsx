const stats = [
  {
    value: "20 min",
    label: "Average Delivery",
  },
  {
    value: "50K+",
    label: "Happy Customers",
  },
  {
    value: "4.9/5",
    label: "APP Rating",
  },
];

const Stats = () => {
  return (
    <section className="bg-[#F7F4EF] text-white py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">

        {stats.map((item) => (
          <div key={item.label}>
            <h2 className="text-5xl font-bold">
              {item.value}
            </h2>

            <p className="mt-2 text-red-100">
              {item.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Stats;