import React from "react";

export default function OvalButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-blue-600 text-white font-medium p-4 rounded-full aspect-square flex items-center justify-center text-center">
      {children}
    </button>
  );
}