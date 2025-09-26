// import { ChevronDown, ChevronUp } from "lucide-react";
// import { useState } from "react";
import Button from "../ui/Button";
import { ServiceCardProps } from "../../data/types";

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  description,
  features,
}) => {
  // const [showFeatures, setShowFeatures] = useState(false);
  return (
    <div className="flex flex-col justify-between h-full relative bg-foreground rounded-2xl shadow-4xl text-center max-w-sm sm:max-w-sm mx-auto p-4 sm:p-6 xl:py-8">
      <img
        src={image}
        alt={title}
        className="rounded-full object-cover w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-2 sm:mb-4"
      />
      <h3 className="text-md sm:text-lg font-varela font-bold mb-2 sm:mb-4">
        {title}
      </h3>
      <p className="font-inter text-xs sm:text-sm text-left mb-4 sm:mb-6">
        {description}
      </p>
      {/* <button
        onClick={() => setShowFeatures((prev) => !prev)}
        className="absolute text-foreground font-bold bg-brand rounded-lg left-2 top-2 sm:left-8 sm:top-4 mx-auto w-auto sm:max-w-sm px-4 py-2 transition-all duration-default ease-in-out hover:scale-zoom"
      >
        {showFeatures ? (
          <>
            <ChevronUp className="w-2 h-2 sm:w-6 sm:h-6" />
          </>
        ) : (
          <>
            <ChevronDown className="w-2 h-2 sm:w-6 sm:h-6" />
          </>
        )}
      </button>

      {showFeatures && (
        <ul className="text-muted-light text-left text-sm font-inter list-disc list-inside space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      )} */}
      <Button customClass="w-full">
        <span>FALE CONOSCO</span>
      </Button>
    </div>
  );
};

export default ServiceCard;
