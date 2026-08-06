import { stats } from "../../data/homeData";

const Stats = () => {
  return (
    <section className="bg-[#201510] py-16 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 text-center md:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-8"
          >
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              {item.value}
            </h2>

            <p className="mt-3 text-xs font-black uppercase tracking-[0.22em] text-[#f5b9a1]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
