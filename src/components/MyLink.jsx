import React from "react";
import { Link } from "gatsby";

export function MyLink({ children }) {
  return (
    <Link to="#work">
      <div className="bg-gradient-to-b from-violet to-violet-dark font-bold py-3 px-8 rounded-full inline-block">
        {children}
      </div>
    </Link>
  );
}
