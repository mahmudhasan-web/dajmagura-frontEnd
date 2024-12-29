import AboutUs from "@/components/aboutUs/AboutUs";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Us",
};

const page = () => {
  return (
    <div className="">
      <AboutUs />
    </div>
  );
};

export default page;
