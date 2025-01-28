"use client";

import React from "react";
import { FeaturesSection } from "../shared/whyChooseUs/WhyChooseUs";
import { whychooseUs } from "@/ui/fakedata";
import { ParallaxProvider } from "react-scroll-parallax";
import { PageHeader } from "../shared/page-header/Page-header";
import servicesBg from "@/assets/header/12324.png";
import parallaxBg from "@/assets/header/3d-rendering-loft-luxury-living-room-with-bookshelf.jpg";
import { ParallaxCta } from "./parallax-cta";
import PropertyManagement from "./PropertyManagement";
import ContactService from "./ContactService";

const OurServices = () => {
  return (
    <ParallaxProvider>
      <PageHeader title="Our Services" backgroundImage={servicesBg.src} />
      <PropertyManagement />
      <FeaturesSection title="Why Choose Us" features={whychooseUs} />
      <ContactService />
      <ParallaxCta
        backgroundImage={parallaxBg.src}
        buttonHref="/contactUs"
        buttonText="Book a call today"
        subtitle="Ready to stop paying management fees? "
        title="Contact us today to schedule a consultation and unlock your property's full potential!"
      />
    </ParallaxProvider>
  );
};

export default OurServices;
