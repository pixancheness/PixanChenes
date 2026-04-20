export default function Anuncios() {
  return (
    <div className="font-sans">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        {/* Video Section */}
        <div className="w-full">
          <div className="sm:p-6">
            <div className="w-full">
              {/* Contenedor responsivo para el iframe */}
              <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100 shadow-md">
                <iframe
                  src="https://www.youtube.com/embed/hkwzpuqt9Ws?si=iGLETaxGsuiLLP5o" 
                  title="Pixan Chenes - Qué es Pixan Chenes?"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full border-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}