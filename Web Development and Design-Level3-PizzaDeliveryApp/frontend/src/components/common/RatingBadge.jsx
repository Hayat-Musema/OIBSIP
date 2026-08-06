import { Star } from "lucide-react";

const RatingBadge = ({ rating }) => {
  return (
    <div className="inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1.5 text-sm font-black text-[#201510] shadow-[0_12px_28px_rgba(32,21,16,0.12)] backdrop-blur">
      <Star
        size={14}
        className="fill-[#f7b731] text-[#f7b731]"
      />

      {rating}
    </div>
  );
};

export default RatingBadge;
