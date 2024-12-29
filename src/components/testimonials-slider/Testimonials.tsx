"use client"

// Import Swiper React components
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

// import required modules
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Autoplay } from 'swiper/modules';
import { TestimonialCard } from './TestimonialsCard';
import { testimonials } from '@/ui/fakedata';

export default function TestimonialsSlider() {
    SwiperCore.use([Autoplay]);

    const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);
    return (

        <div id='testimonials' className='relative  px-2 lg:container section-gap '>
            <Swiper className="mySwiper max-w-7xl " slidesPerView={1}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false,
                    stopOnLastSlide: false,

                }}
                loop={true}
                // spaceBetween={30}
                onSwiper={(swiper) => setSwiperInstance(swiper)} // Capture the swiper instance when initialized
            >
                {
                    testimonials?.map((data, idx) => <SwiperSlide key={idx} className=''><TestimonialCard author={data.author} company={data.company} imageSrc={data.imageSrc} quote={data.quote} /></SwiperSlide>)
                }
            </Swiper>
            {/* Custom navigation buttons */}
            <div className=' relative -translate-y-[300px]  h-full sm:-translate-y-[170px] lg:-translate-y-[140px] z-20 2xl:-translate-y-[150px] '>
                {/* <div className="relative -translate-y-1/2 z-20"> */}
                <div className='absolute top-0 left-0 z-20'>
                    {/* Left (Previous) button */}
                    <button className={` p-3 rounded-full bg-[#0413260D] `}
                        onClick={() => swiperInstance?.slidePrev()}>
                        <ChevronLeft className='fill-transparent text-black relative ' />
                    </button>
                </div>

                <div className='absolute top-0 right-0 z-20'>
                    {/* Right (Next) button */}
                    <button className={`$ p-3 rounded-full bg-[#0413260D] `}
                        onClick={() => swiperInstance?.slideNext()}>
                        <ChevronRight className='fill-transparent text-black relative ' />
                    </button>
                </div>
            </div>
        </div>
    );
}
