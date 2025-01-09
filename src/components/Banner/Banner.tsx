'use client'
import Image from 'next/image';
import React from 'react';
import banner1 from "@/assets/banner1.png"
import banner2 from "@/assets/banner2.png"
import Button from '../shared/Button/Button';

const Banner = () => {
    return (
        <section>
            <div className='grid lg:grid-cols-2'>
                <div className='flex1 relative'>
                    <Image src={banner1} alt='banner1' width={1200} height={820} className='w-full h-[300px] md:h-full'></Image>
                    <div className='w-10/12 mx-auto absolute top-1/4 border pl-12 pt-12 pb-12 pr-6 text-white left-[10%] space-y-6'>
                        <h1 className='md:text-6xl text-xl sm:text-2xl font-lora'>Maximise Your Property’s Potential with Expert Management.</h1>
                        <h3 className='md:text-3xl text-lg sm:text-xl'>Let your property work for you. Earn more whilst we handle every detail effortlessly.</h3>
                        <p>Your trusted partner for hassle-free property management solutions..</p>
                        <Button className='w-full rounded-3xl bg-accent uppercase max-w-md'>Book A Call</Button>

                    </div>
                    <div className='w-7/12 h-3 absolute top-[24%] mt-1 rounded-md bg-white left-[22%]'>
                    </div>
                </div>
                <div className='flex2'>
                    <Image src={banner2} alt='banner2' width={1200} height={820} className='w-full h-[300px] md:h-full'></Image>
                </div>
            </div>

        </section >
    );
};

export default Banner;