import Button from "../common/Button";
import { Send } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="bg-[#fff8f3] px-6 py-20">
      <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-[#201510] px-6 py-14 text-center text-white shadow-[0_28px_90px_rgba(32,21,16,0.22)] sm:px-12">
        <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
          Join the PizzaVerse
        </h2>

        <p className="mx-auto mt-4 max-w-xl leading-7 text-[#e8d8cf]">
          Get exclusive early access to seasonal drops and secret menu items.
        </p>

        <form
          onSubmit={(event) => event.preventDefault()}
          className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 rounded-[1.6rem] bg-white p-2 sm:flex-row"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="min-h-14 flex-1 rounded-full bg-white px-5 text-[#201510] outline-none placeholder:text-[#a69388]"
            aria-label="Email address"
          />

          <Button type="submit" className="min-h-14">
            <Send size={18} />
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
