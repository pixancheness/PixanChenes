import { Link } from "@/i18n/navigation";
import Image from "next/image";

interface LogoProps {
  size?: "small" | "medium" | "large";
  className?: string;
}

const Logo = ({ size = "medium", className = "" }: LogoProps) => {
  // Definir tamaños según la prop
  const getSizeConfig = (size: string) => {
    switch (size) {
      case "large":
        return {
          maxWidth: 400,
          maxHeight: 400,
          containerClass:
            "max-w-56 max-h-56 md:max-w-72 md:max-h-72 lg:max-w-80 lg:max-h-80",
        };
      default: // medium
        return {
          maxWidth: 150,
          maxHeight: 150,
          containerClass:
            "max-w-32 max-h-32 md:max-w-40 md:max-h-40 lg:max-w-48 lg:max-h-48",
        };
    }
  };

  const sizeConfig = getSizeConfig(size);

  return (
    <Link href="/" className={`flex items-center pt-4 ${className}`}>
      <div className={`relative ${sizeConfig.containerClass}`}>
        <Image
          src="/img/logo_pixan.webp"
          alt="Pixan Chenes"
          width={sizeConfig.maxWidth}
          height={sizeConfig.maxHeight}
          className="object-contain w-auto h-auto max-w-full max-h-full"
          priority
        />
      </div>
    </Link>
  );
};

export default Logo;
