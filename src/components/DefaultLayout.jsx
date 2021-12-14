import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
