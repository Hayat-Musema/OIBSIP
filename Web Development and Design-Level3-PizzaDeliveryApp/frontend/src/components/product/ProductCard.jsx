import Button from "../common/Button";
import RatingBadge from "../common/RatingBadge";

const ProductCard = ({
  image,
  title,
  description,
  price,
  rating,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">

      <div className="relative">

        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover"
        />

        <div className="absolute top-3 right-3">
          <RatingBadge rating={rating} />
        </div>

      </div>

      <div className="p-5">

        <div className="flex justify-between items-center">

          <h3 className="text-2xl font-semibold">
            {title}
          </h3>

          <span className="text-red-700 text-2xl font-bold">
            ${price}
          </span>

        </div>

        <p className="text-gray-500 mt-3 mb-6">
          {description}
        </p>

        <Button className="w-full">
          Add to Cart
        </Button>

      </div>

    </div>
  );
};

export default ProductCard;