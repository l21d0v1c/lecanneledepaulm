import React from "react";

interface OvalButtonProps {
  children: React.ReactNode;
}

const OvalButton: React.FC<OvalButtonProps> = ({ children }) => {
  return (
    <button className="bg-blue-600 text-white font-medium px-6 py-6 rounded-full"> {/* Changement de py-4 à py-6 */}
      {children}
    </button>
  );
};

export default OvalButton;