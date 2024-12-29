import Banner from "@/components/Banner/Banner";
import ContactUs from "@/components/ContactUs/ContactUs";
import Footer from "@/components/Footer/Footer";

import { FeaturesSection } from "@/components/shared/whyChooseUs/WhyChooseUs";
import TestimonialsSlider from "@/components/testimonials-slider/Testimonials";
import { HomewhychooseUs } from "@/ui/fakedata";

export default function Page() {
    return (
        <div>
            <Banner></Banner>
            <FeaturesSection
                title="Why Choose “Magura” Property Solutions?"
                subtitle="Experience expert management, maximize your returns, and enjoy unparalleled support with a team you can trust."
                features={HomewhychooseUs}
            />
            <TestimonialsSlider />
            <ContactUs />
            <Footer />


        </div>
    );
}