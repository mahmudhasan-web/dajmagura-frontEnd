import Banner from "@/components/Banner/Banner";

import { FeaturesSection } from "@/components/shared/whyChooseUs/WhyChooseUs";
import TestimonialsSlider from "@/components/testimonials-slider/Testimonials";
import { HomewhychooseUs } from "@/ui/fakedata";

export default function Page() {
    return (
      <div>
        <Banner></Banner>
        <FeaturesSection
          title="Why Choose “Magura” Property Solutions?"
          subtitle="Experience expert management, maximise your returns, and enjoy unrivalled support with a team you can trust."
          features={HomewhychooseUs}
        />
        <TestimonialsSlider />
      </div>
    );
}