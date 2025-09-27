import React from "react";

export default function OvalButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-blue-600 text-white font-medium px-6 py-3 rounded-full">
      {children}
    </button>
  );
}