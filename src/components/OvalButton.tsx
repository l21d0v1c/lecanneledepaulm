import React from "react";

interface OvalButtonProps {
  children: React.ReactNode;
}

const OvalButton: React.FC<OvalButtonProps> = ({ children }) => {
  return (
    <button className="bg-blue-600 text-white font-medium px-6 py-4 rounded-full"> {/* Changement de py-3 à py-4 */}
      {children}
    </button>
  );
};

export default OvalButton;