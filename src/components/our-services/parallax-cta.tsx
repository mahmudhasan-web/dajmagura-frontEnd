"use client";

import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import Button from "../shared/Button/Button";

interface ParallaxCtaProps {
  subtitle?: string;
  title: string;
  buttonText: string;
  buttonHref: string;
  backgroundImage: string;
}

export function ParallaxCta({
  subtitle,
  title,
  buttonText,
  buttonHref,
  backgroundImage,
}: ParallaxCtaProps) {
  return (
    <div className="section-gap">
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
            <div className="mx-auto max-w-7xl px-4  text-center">
              {subtitle && (
                <p className="mb-4 text-sm font-medium text-white md:text-base lg:text-2xl">
                  {subtitle}
                </p>
              )}
              <h2 className="mb-8 font-cardillac text-xl sm:text-2xl font-medium !leading-normal text-white md:text-3xl lg:text-5xl ">
                {title}
              </h2>
              <a href={buttonHref}>
                <Button className="bg-accent  font-semibold uppercase !px-10 py-2  rounded-full text-black">
                  {buttonText}
                </Button>
              </a>
            </div>
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </div>
  );
}
