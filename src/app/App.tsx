"use client";
import React from "react";
import DevPosts from "../Components/DevPosts";
import { NextUIProvider } from "@nextui-org/react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

const App = ({ children }: any) => {
  return (
    <NextUIProvider>
      <Header />
      {children}
      <Footer />
    </NextUIProvider>
  );
};

export default App;
