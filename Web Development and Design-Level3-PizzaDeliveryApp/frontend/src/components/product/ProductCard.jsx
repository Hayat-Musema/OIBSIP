import Button from "../common/Button";
import RatingBadge from "../common/RatingBadge";
import { ShoppingCart } from "lucide-react";

const ProductCard = ({
  image,
  title,
  description,
  price,
  rating,
}) => {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-[#f0e4d9] bg-white shadow-[0_24px_70px_rgba(32,21,16,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(32,21,16,0.14)]">

      <div className="relative bg-[#fff5ec] px-6 pt-8">

        <img
          src={image}
          alt={title}
          className="h-56 w-full object-contain transition duration-500 group-hover:scale-105"
        />

        <div className="absolute right-5 top-5">
          <RatingBadge rating={rating} />
        </div>

      </div>

      <div className="p-6">

        <div className="flex items-start justify-between gap-4">

          <h3 className="text-xl font-black tracking-tight text-[#201510] sm:text-2xl">
            {title}
          </h3>

          <span className="shrink-0 text-2xl font-black text-[#e2361d]">
            ${price}
          </span>

        </div>

        <p className="mt-3 min-h-20 text-sm leading-6 text-[#76665c]">
          {description}
        </p>

        <Button className="mt-6 w-full">
          <ShoppingCart size={18} />
          Add to Cart
        </Button>

      </div>

    </article>
  );
};

export default ProductCard;
