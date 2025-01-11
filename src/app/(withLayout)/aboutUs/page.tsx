import AboutUs from "@/components/aboutUs/AboutUs";
import { PageHeader } from "@/components/shared/page-header/Page-header";
import { Metadata } from "next";
import React from "react";
import anputUsBg from "@/assets/about/Rectangle 4300.png";
import anputUsBg2 from "@/assets/about/Rectangle 4298.png";
import anputUsBg3 from "@/assets/about/Rectangle 4299.png";

export const metadata: Metadata = {
  title: "About Us",
};

const page = () => {
  return (
    <div className="">
      <PageHeader
        title="About Magura property management."
        multiple={[anputUsBg.src, anputUsBg2.src, anputUsBg3.src]}
      />
      <AboutUs />
    </div>
  );
};

export default page;
