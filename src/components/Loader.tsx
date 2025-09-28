import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="loader-overlay fixed inset-0 bg-loader-dark-bg z-[9999]">
      <div className="thinking absolute top-[20%] left-[30%] text-cannelé-orange text-4xl font-dancing-script text-shadow-loader-dark text-stroke-loader-dark backdrop-blur-[2px]">
        <h1>Cuisson en cours..</h1>
      </div>
      <div className="loader absolute top-1/2 left-[32%] -translate-y-1/2 w-[100px] h-[100px] animate-animate">
        <div className="photo flex absolute inset-0 items-center justify-center space-x-8"> {/* Augmentation de l'espacement à space-x-8 */}
          <img src="/logo2.png" alt="Logo" className="loader-logo h-[10em] w-[10em] rounded-full box-shadow-cannelé-sm animate-rotate" />
          <img src="/logo2.png" alt="Logo" className="loader-logo h-[10em] w-[10em] rounded-full box-shadow-cannelé-sm animate-rotate" />
          <img src="/logo2.png" alt="Logo" className="loader-logo h-[10em] w-[10em] rounded-full box-shadow-cannelé-sm animate-rotate" />
        </div>
      </div>
    </div>
  );
};

export default Loader;