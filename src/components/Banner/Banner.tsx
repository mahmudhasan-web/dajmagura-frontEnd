'use client'
import Image from 'next/image';
import React from 'react';
import banner1 from "@/assets/banner1.png"
import banner2 from "@/assets/banner2.png"

const Banner = () => {
    return (
        <section>
            <div className='flex'>
                <div className='flex1 relative'>
                    <Image src={banner1} alt='banner1'></Image>
                    <div className='w-10/12 mx-auto absolute top-1/4 border pl-12 pt-12 pb-12 pr-6 text-white left-[10%] space-y-6'>
                        <h1 className='text-6xl'>Maximize Your Property’s Potential with Expert Management.</h1>
                        <h3 className='text-3xl'>Let your property work for you. Earn more while we handle every detail effortlessly.</h3>
                        <p>Your trusted partner for hassle-free property management solutions.</p>
                    </div>
                    <div className='w-7/12 h-3 absolute top-[24%] mt-1 rounded-md bg-white left-[22%]'>
                    </div>
                </div>
                <div className='flex2'>
                    <Image src={banner2} alt='banner2'></Image>
                </div>
            </div>
            
        </section>
    );
};

export default Banner;