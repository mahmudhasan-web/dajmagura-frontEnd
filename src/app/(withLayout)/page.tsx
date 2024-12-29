import { FeaturesSection } from "@/components/shared/whyChooseUs/WhyChooseUs";
import { HomewhychooseUs } from "@/ui/fakedata";

export default function Page() {
    return (
        <div>
            <FeaturesSection
                title="Why Choose “Magura” Property Solutions?"
                subtitle="Experience expert management, maximize your returns, and enjoy unparalleled support with a team you can trust."
                features={HomewhychooseUs}
            />

        </div>
    );
}