import React from "react";

interface GlowIconContainerProps {
  iconColor?: string; // Optional prop for icon's className
  materialIcon?: React.ReactNode;
  bgcolor?: string;
}

function GlowIconContainer({
  iconColor,
  materialIcon,
  bgcolor,
}: GlowIconContainerProps) {
  return (
    <div className="relative flex w-max items-center justify-center rounded-full">
      <div className={`h-12 w-12 bg-violet-500 p-4 blur-2xl ${bgcolor}`}></div>
      {React.cloneElement(materialIcon as React.ReactElement<any>, {
        className: `absolute text-violet-500 ${iconColor || ""}`,
      })}
    </div>
  );
}

export default GlowIconContainer;
