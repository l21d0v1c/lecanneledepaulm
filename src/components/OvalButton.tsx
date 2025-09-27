import React from "react";

interface OvalButtonProps {
  children: React.ReactNode;
}

const OvalButton: React.FC<OvalButtonProps> = ({ children }) => {
  return (
    <button className="bg-blue-600 text-white font-medium px-6 py-8 rounded-full"> {/* Changement de py-6 à py-8 */}
      {children}
    </button>
  );
};

export default OvalButton;