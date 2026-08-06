import SectionTitle from "../common/SectionTitle";
import { journeySteps } from "../../data/homeData";

const Journey = () => {
  return (
    <section className="bg-[#fff8f3]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          title="The PizzaVerse Journey"
          subtitle="From one tap to the first hot slice, every step is tuned for craft, speed, and consistency."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {journeySteps.map((item) => (
            <article
              key={item.step}
              className="rounded-[2rem] border border-[#f0e4d9] bg-white p-7 shadow-[0_22px_60px_rgba(32,21,16,0.07)] transition duration-300 hover:-translate-y-1"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e2361d] text-xl font-black text-white shadow-[0_16px_28px_rgba(226,54,29,0.26)]">
                {item.step}
              </div>
              <h3 className="text-2xl font-black tracking-tight text-[#201510]">
                {item.title}
              </h3>
              <p className="mt-4 leading-7 text-[#76665c]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
