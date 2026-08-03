import SectionTitle from "../common/SectionTitle";

import person1 from "../../assets/images/testimonials/Arthur.png";
import person2 from "../../assets/images/testimonials/mark.png";
import person3 from "../../assets/images/testimonials/sarah.png";

const reviews = [
  {
    name: "Sarah Johnson",
    image: person3,
    review:
      "Absolutely the best pizza I've ever had. Fresh ingredients and amazing delivery.",
  },
  {
    name: "Mark Davis",
    image: person2,
    review:
      "PizzaVerse never disappoints. Every order tastes fresh and delicious.",
  },
  {
    name: "Emily Wilson",
    image: person1,
    review:
      "The Truffle Umami pizza is incredible. Highly recommended!",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#FFF8F3] py-20">

      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          title="What Our Customers Say"
          subtitle="Thousands of happy pizza lovers trust PizzaVerse."
        />

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-xl shadow p-6"
            >

              <img
                src={review.image}
                alt={review.name}
                className="w-20 h-20 rounded-full object-cover mb-4"
              />

              <p className="text-gray-600 italic">
                "{review.review}"
              </p>

              <h4 className="mt-5 font-semibold">
                {review.name}
              </h4>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;