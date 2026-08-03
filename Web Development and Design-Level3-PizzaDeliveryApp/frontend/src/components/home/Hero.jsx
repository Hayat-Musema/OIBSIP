import pizza15 from "../../assets/images/hero/pizza15.png";
import Button from "../common/Button";

const Hero=()=>{
    return (
        <section className="bg-[#FFF8F3">
             <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 grid lg:grid-cols-2 items-center gap-12">

        {/* Left Content */}
        <div>

          <span className="inline-block bg-red-100 text-red-700 px-4 py-28 rounded-full text-sm font-medium">
            🍕 PREMIUM PIZZA TECH
          </span>

          <h1 className="text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mt-6">
            Pizza Perfected.
          </h1>

          <p className="text-gray-600 text-lg mt-6 max-w-lg">
            Experience the intersection of artisanal culinary craft
            and hyper-efficient delivery technology.

           Premium ingredients,
           sourced locally,
           delivered in under 20 minutes.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">

            <Button>
              Order Now
            </Button>
              <Button variant="secondary">
              View Menu
            </Button>

          </div>

        </div>

        {/* Right Image */}
        <div className="flex justify-center">

          <img
            src={pizza15}
            alt="Pizza Hero"
            className="w-full max-w-x1 object-contain"
          />

        </div>

      </div>
        </section>


    );
};
export default Hero;