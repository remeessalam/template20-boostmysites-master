import { Star } from "lucide-react";

const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
};

export default StarRating;
