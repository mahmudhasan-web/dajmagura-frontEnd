'use client'

import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax'
import Button from '../shared/Button/Button'

interface ParallaxCtaProps {
    subtitle?: string
    title: string
    buttonText: string
    buttonHref: string
    backgroundImage: string
}

export function ParallaxCta({
    subtitle,
    title,
    buttonText,
    buttonHref,
    backgroundImage,
}: ParallaxCtaProps) {
    return (
        <div className='section-gap'>

            <ParallaxBanner className="relative h-[400px] lg:h-[500px] ">
                {/* Background Image Layer */}
                <ParallaxBannerLayer speed={-20}>
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${backgroundImage})` }}
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-primary_bg" />
                </ParallaxBannerLayer>

                {/* Content Layer */}
                <ParallaxBannerLayer speed={-5}>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="mx-auto max-w-4xl px-4 text-center">
                            {subtitle && (
                                <p className="mb-4 text-sm font-medium text-white md:text-base">
                                    {subtitle}
                                </p>
                            )}
                            <h2 className="mb-8 text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl font-lora">
                                {title}
                            </h2>
                            <Button
                                className="bg-accent text-sm font-semibold uppercase tracking-wider  rounded-full text-white"
                            >
                                <a href={buttonHref}>{buttonText}</a>
                            </Button>
                        </div>
                    </div>
                </ParallaxBannerLayer>
            </ParallaxBanner>
        </div>

    )
}

