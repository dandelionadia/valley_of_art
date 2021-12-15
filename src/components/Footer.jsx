import * as React from "react";

export const Footer = () => {
  return (
    <div>
      <div className="w-full h-px border-gray-700 border-t inset-y-0 mb-5" />
      <div className="text-violet-light text-opacity-60 text-xs mb-5">
        © {new Date().getFullYear()} Nadiia Ridko. All rights reserved.
      </div>
      <div className="text-violet-light text-opacity-60 text-xs mb-5">
        Made by Nadiia and Artem (You're always will have a special place in my
        hart ❤️).
      </div>
    </div>
  );
};
