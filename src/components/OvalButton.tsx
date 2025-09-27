import React from "react";

export default function OvalButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-blue-600 text-white font-medium p-4 rounded-full flex items-center justify-center text-center h-48 w-64">
      {children}
    </button>
  );
}