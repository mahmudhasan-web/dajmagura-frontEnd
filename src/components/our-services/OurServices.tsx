import React from 'react';
import { FeaturesSection } from '../shared/whyChooseUs/WhyChooseUs';
import { whychooseUs } from '@/ui/fakedata';

const OurServices = () => {
    return (
        <div>
            <FeaturesSection
                title="Why Choose Us"
                features={whychooseUs}
            />
        </div>
    );
};

export default OurServices;