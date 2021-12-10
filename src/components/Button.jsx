import React from "react";

export function Button({ children }) {
  return (
    <button className="bg-gradient-to-b from-violet to-violet-dark font-bold py-3 px-8 rounded-full w-max">
      {children}
    </button>
  );
}
