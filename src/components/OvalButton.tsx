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
        "rounded-full px-6 py-3 bg-black text-white text-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default OvalButton;