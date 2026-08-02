import { Star } from "lucide-react";

const RatingBadge = ({ rating }) => {
  return (
    <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-full shadow text-sm font-medium">
      <Star
        size={14}
        className="fill-yellow-400 text-yellow-400"
      />

      {rating}
    </div>
  );
};

export default RatingBadge;