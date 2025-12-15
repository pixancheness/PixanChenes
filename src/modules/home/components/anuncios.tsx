import Image from "next/image";
export default function Anuncios() {
  return (
    <div className=" font-sans ">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        {/* Image Section */}
        <div className="w-full">
          <div className="sm:p-6">
            <div className="w-full">
              <Image
                src="https://res.cloudinary.com/danv3godx/image/upload/v1765772142/proximamente_inj3we.jpg"
                alt="Anuncios"
                width={1200}
                height={800}
                className="w-full h-auto object-cover rounded-lg"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
