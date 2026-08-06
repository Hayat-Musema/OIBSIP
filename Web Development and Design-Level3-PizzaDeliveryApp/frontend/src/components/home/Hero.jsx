import pizza15 from "../../assets/images/hero/pizza15.png";
import Button from "../common/Button";
import { ArrowRight, Clock3, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#fff8f3]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-14 pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:pb-20 lg:pt-24">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#ffd8c7] bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#e2361d] shadow-sm backdrop-blur">
            <Clock3 size={15} />
            Premium Pizza Tech
          </span>

          <h1 className="mt-7 max-w-3xl text-5xl font-black leading-[0.96] tracking-tight text-[#201510] sm:text-6xl lg:text-7xl">
            Pizza Perfected.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#6f5e54]">
            Experience the intersection of artisanal culinary craft and
            hyper-efficient delivery technology. Premium ingredients, sourced
            locally, delivered in under 20 minutes.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button>
              <ArrowRight size={18} />
              Order Now
            </Button>
            <Button variant="secondary">
              <Play size={18} />
              View Menu
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-8 text-sm font-bold text-[#201510]">
            <span>
              <strong className="text-[#e2361d]">48h</strong> sourdough
            </span>
            <span>
              <strong className="text-[#e2361d]">4.9</strong> community rating
            </span>
          </div>
        </div>

        <div className="relative flex min-h-[360px] items-center justify-center lg:min-h-[520px]">
          <div className="absolute h-[74%] w-[74%] rounded-full bg-[#ffe0cf]" />
          <div className="absolute h-[54%] w-[54%] rounded-full border border-[#f7c8b2]" />

          <img
            src={pizza15}
            alt="Pizza Hero"
            className="relative z-10 w-full max-w-[560px] object-contain drop-shadow-[0_34px_34px_rgba(64,31,17,0.22)]"
          />

          <div className="absolute bottom-6 left-2 z-20 rounded-3xl bg-white/90 px-5 py-4 shadow-[0_20px_50px_rgba(32,21,16,0.16)] backdrop-blur sm:left-8">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#a69388]">
              Average Delivery
            </p>
            <p className="mt-1 text-2xl font-black text-[#201510]">20 min</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
