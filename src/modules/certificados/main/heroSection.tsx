import Image from "next/image";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("Certificates.hero");

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src="https://res.cloudinary.com/danv3godx/image/upload/v1758077155/main_w9ybkm.jpg"
        alt="Imagen principal de certificados"
        fill
        style={{
          objectFit: "cover",
        }}
        priority
        className="w-full h-full"
      />

      {/* Contenido principal */}
      <div className="relative z-1 h-full flex flex-col justify-between items-start ">
        {/* Título principal */}
        <div className="mb-8 md:mb-12 text-center mt-32 px-8 ">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-2 ">
            {t("heroTitle")}
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-yellow-400 mb-8 text-center">
            {t("heroSubtitle")}
          </h1>
        </div>
        {/* 
        
        <div className="absolute bottom-0 left-0 bg-background rounded-tr-2xl backdrop-blur-sm shadow-lg p-4 md:p-6 lg:p-8 max-w-xs md:max-w-md lg:max-w-2xl xl:max-w-3xl">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:gap-8">
           
            <div className="flex-shrink-0 text-center md:flex md:items-center md:justify-center">
              <p className="text-gray-700 text-sm md:text-base lg:text-lg font-medium leading-tight max-w-[120px] md:max-w-[150px] lg:max-w-[180px] xl:max-w-[200px]">
                {t("communitySupport")}
              </p>
            </div>

  
           <div className="flex gap-4 md:gap-6 lg:gap-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-yellow-500 mb-1">
                  1,250
                </div>
                <p className="text-xs md:text-sm lg:text-base text-gray-600 font-medium">
                  {t("treesPlanted")}
                </p>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-yellow-500 mb-1">
                  3,400
                </div>
                <p className="text-xs md:text-sm lg:text-base text-gray-600 font-medium">
                  {t("certificatesIssued")}
                </p>
              </div>
            </div> 
          </div>
        </div>*/}
      </div>
    </div>
  );
}
