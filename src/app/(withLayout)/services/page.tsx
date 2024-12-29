import OurServices from '@/components/our-services/OurServices';
import { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
    title: 'Services',
}


const page = () => {
    return (
        <div>
            <OurServices />
        </div>
    );
};

export default page;