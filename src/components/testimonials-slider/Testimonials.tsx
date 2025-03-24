"use client"

import { testimonials } from "@/ui/fakedata"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import SwiperCore from "swiper"
import "swiper/css"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { NewTestimonialCard } from "./NewTwstimonialsCard"

export default function TestimonialsSlider() {
    SwiperCore.use([Autoplay])

    const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null)
    const [currentImage, setCurrentImage] = useState<number>(0)

    return (
        <div className="bg-[#FAFCFF] md:my-[100px] my-[70px] lg:my-[120px]">
            <div id="testimonials" className="relative container py-[70px] sm:py-[90px] lg:py-[120px]">
                <h1 className="lg:text-[40px] md:text-2xl text-lg font-serif text-center sm:mb-[25px] mb-[20px] md:mb-[30px] lg:mb-[40px]">
                    Trusted by Property Owners, Loved by Tenants
                </h1>

                <div className="relative">
                    <Swiper
                        className="mySwiper max-w-7xl"
                        slidesPerView={1}
                        centeredSlides={true}
                        autoplay={{
                            delay: 3000,
                            pauseOnMouseEnter: true,
                            disableOnInteraction: false,
                            stopOnLastSlide: false,
                        }}
                        loop={true}
                        onSwiper={(swiper) => setSwiperInstance(swiper)}
                        onSlideChange={(swiper) => setCurrentImage(swiper.realIndex)}
                    >
                        {testimonials?.map((data, idx) => (
                            <SwiperSlide key={idx}>
                                <NewTestimonialCard
                                    quote={data.quote}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation dots */}
                    <div className="flex items-center gap-1 justify-center mt-8">
                        {testimonials?.map((_, idx) => (
                            <button
                                key={idx}
                                style={{
                                    width: `${(10 - idx)}px`,
                                    height: `${(10 - idx)}px`
                                }}
                                onClick={() => swiperInstance?.slideTo(idx)}
                                className={` rounded-full transition-all duration-300 ${currentImage === idx ? "bg-[#00CCC1]" : "bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Navigation arrows */}
                    <button
                        className="absolute top-1/2 -translate-y-1/2 -left-4 lg:-left-12 p-3 rounded-full bg-[#edf9fc] shadow-md hover:bg-gray-50 transition-colors z-10"
                        onClick={() => swiperInstance?.slidePrev()}
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-600" />
                    </button>

                    <button
                        className="absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-12 p-3 rounded-full bg-[#edf9fc] shadow-md hover:bg-gray-50 transition-colors z-10"
                        onClick={() => swiperInstance?.slideNext()}
                    >
                        <ChevronRight className="w-5 h-5 text-gray-600" />
                    </button>
                </div>
            </div>
        </div>
    )
}

