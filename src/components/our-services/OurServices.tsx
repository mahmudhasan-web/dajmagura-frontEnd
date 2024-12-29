import React from "react";
import { FeaturesSection } from "../shared/whyChooseUs/WhyChooseUs";
import { whychooseUs } from "@/ui/fakedata";
import PropertyManagement from "./PropertyManagement";

const OurServices = () => {
  return (
    <div className="container">
      <PropertyManagement />
      <FeaturesSection title="Why Choose Us" features={whychooseUs} />
    </div>
  );
};

export default OurServices;
