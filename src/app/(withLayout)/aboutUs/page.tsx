import AboutUs from "@/components/aboutUs/AboutUs";
import { PageHeader } from "@/components/shared/page-header/Page-header";
import { Metadata } from "next";
import React from "react";
import anputUsBg from "@/assets/photo-collage.png.png"

export const metadata: Metadata = {
  title: "About Us",
};

const page = () => {
  return (
    <div className="">
      <PageHeader title='About Magura property management.' backgroundImage={anputUsBg.src} />
      <AboutUs />
    </div>
  );
};

export default page;
