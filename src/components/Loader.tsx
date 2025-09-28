import React, { useState, useEffect } from 'react';

const Loader: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    // Définir l'état initial
    checkScreenSize();

    // Ajouter un écouteur d'événement pour le redimensionnement de la fenêtre
    window.addEventListener('resize', checkScreenSize);

    // Nettoyer l'écouteur d'événement au démontage du composant
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []); // Le tableau de dépendances vide assure que cela ne s'exécute qu'une fois au montage

  return (
    <div className="loader-overlay fixed inset-0 bg-loader-dark-bg z-[9999]">
      <div className={`thinking absolute top-[20%] text-cannelé-orange text-4xl font-cormorant-garamond text-shadow-loader-dark text-stroke-loader-dark backdrop-blur-[2px] ${isSmallScreen ? 'left-1/2 -translate-x-1/2 text-center' : 'left-[30%]'}`}>
        <h1>Cuisson en cours..</h1>
      </div>
      <div className={`loader absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${isSmallScreen ? '' : 'w-[608px] h-[160px]'}`}>
        <div className={`photo flex items-center justify-center ${isSmallScreen ? '' : 'absolute inset-0 space-x-16'}`}>
          {isSmallScreen ? (
            <img src="/logo2.png" alt="Logo" className="loader-logo h-[10em] w-[10em] rounded-full box-shadow-cannelé-sm animate-rotate" />
          ) : (
            <>
              <img src="/logo2.png" alt="Logo" className="loader-logo h-[10em] w-[10em] rounded-full box-shadow-cannelé-sm animate-rotate" />
              <img src="/logo2.png" alt="Logo" className="loader-logo h-[10em] w-[10em] rounded-full box-shadow-cannelé-sm animate-rotate" />
              <img src="/logo2.png" alt="Logo" className="loader-logo h-[10em] w-[10em] rounded-full box-shadow-cannelé-sm animate-rotate" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Loader;