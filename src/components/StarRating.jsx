import { Star } from 'lucide-react';

export default function StarRating({ rating, onChange }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          className="focus:outline-none transition-transform hover:scale-110"
        >
          <Star
            size={20}
            className={`${
              star <= rating
                ? 'fill-[#FFDAC1] text-[#FFDAC1]'
                : 'text-[#E5E7EB]'
            }`}
          />
        </button>
      ))}
    </div>
  );
}
