import SectionTitle from "../common/SectionTitle";
import { testimonials } from "../../data/homeData";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          title="What our citizens say"
          subtitle="Real PizzaVerse regulars on the craft, speed, and flavor that keeps them coming back."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((review) => (
            <article
              key={review.name}
              className="rounded-[2rem] border border-[#f0e4d9] bg-[#fffaf6] p-7 shadow-[0_20px_60px_rgba(32,21,16,0.06)]"
            >
              <Quote className="mb-7 text-[#e2361d]" size={30} />

              <p className="min-h-36 text-base leading-7 text-[#5e5149]">
                "{review.review}"
              </p>

              <div className="mt-7 flex items-center gap-4 border-t border-[#eadfd4] pt-6">
                <img
                  src={review.image}
                  alt={review.name}
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-black text-[#201510]">{review.name}</h4>
                  <p className="text-sm text-[#8f7f75]">{review.role}</p>
                  <div className="mt-1 flex gap-0.5 text-[#f7b731]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={13} className="fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
