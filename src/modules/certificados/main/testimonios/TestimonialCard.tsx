import { CheckCircle2 } from "lucide-react";
import "./testimonial.type";

type TestimonialCardProps = Omit<Testimonial, "id">;

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  certificates,
  imageUrl,
}) => {
  return (
    <div className="bg-white/50 backdrop-blur-sm p-6  md:p-8 rounded-3xl shadow-lg border border-gray-200/50 h-full min-h-[280px] flex flex-col">
      <div className="flex-grow">
        <p className="relative text-base md:text-lg text-gray-700 leading-relaxed">
          <span className="absolute -top-3 -left-3 text-4xl md:text-5xl text-gray-200/80 font-serif leading-none">
            "
          </span>
          <span className="relative z-10">{quote}</span>
        </p>
      </div>

      <div className="flex items-center mt-6 pt-4 border-t border-gray-100">
        <img
          src={imageUrl}
          alt={`Foto de ${author}`}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-white shadow-md flex-shrink-0"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = "https://placehold.co/100x100/EFE8D8/333?text=Error";
          }}
        />
        <div className="ml-4 flex-grow min-w-0">
          <p className="font-semibold text-gray-800 text-sm md:text-base truncate">
            {author}
          </p>
          <div className="flex items-center text-xs md:text-sm text-green-600 mt-1">
            <CheckCircle2 className="w-4 h-4 mr-1.5 flex-shrink-0" />
            <span>{certificates} certificados</span>
          </div>
        </div>
      </div>
    </div>
  );
};
