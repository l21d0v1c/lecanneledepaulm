import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface OvalButtonProps extends React.ComponentPropsWithoutRef<typeof Button> {
  children: React.ReactNode;
  className?: string;
}

const OvalButton: React.FC<OvalButtonProps> = ({ children, className, ...props }) => {
  return (
    <Button
      className={cn(
        "h-[120px] w-[250px] rounded-full bg-black text-white text-xl font-bold hover:bg-gray-800 transition-colors flex items-center justify-center", // Largeur changée de w-[300px] à w-[250px]
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default OvalButton;