import React from "react";

interface OvalButtonProps {
  children: React.ReactNode;
}

const OvalButton: React.FC<OvalButtonProps> = ({ children }) => {
  return (
    <button className="bg-blue-600 text-white font-medium px-6 py-3 h-12 rounded-full"> {/* Ajout de py-3 */}
      {children}
    </button>
  );
};

export default OvalButton;