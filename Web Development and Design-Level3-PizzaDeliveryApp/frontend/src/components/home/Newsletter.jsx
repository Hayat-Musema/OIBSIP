import Button from "../common/Button";

const Newsletter = () => {
  return (
    <section className="bg-gray-900 text-white py-20">

      <div className="max-w-3xl mx-auto text-center px-6">

        <h2 className="text-4xl font-bold">
         Join the PizzaVerse
        </h2>

        <p className="text-gray-300 mt-4">
         Get exclusive early access
         to seasonal drops
         and secret menu items.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-8">

          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-3 rounded-lg text-gray-900 bg-white outline-none"
          />

          <Button>
            Subscribe
          </Button>

        </div>

      </div>

    </section>
  );
};

export default Newsletter;