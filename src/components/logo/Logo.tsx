import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="size-9 flex items-center justify-center bg-black text-white font-bold text-xl rounded-xl">
        N
      </div>
      <span className="text-lg font-bold tracking-wide">Nexus</span>
    </div>
  );
};

export default Logo;
