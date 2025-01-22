"use client";
import Image from "next/image";
import React from "react";
import banner1 from "@/assets/banner1.png";
import banner2 from "@/assets/banner2.png";
import Button from "../shared/Button/Button";
import Link from "next/link";

const Banner = () => {
  return (
    <section>
      <div className="grid min-h-[800px] lg:grid-cols-2">
        <div className="flex1 relative">
          <Image
            src={banner1}
            alt="banner1"
            width={1200}
            height={820}
            className="w-full h-[500px] md:h-full"
          ></Image>
          <div className="w-10/12 mx-auto absolute top-[30%] md:top-[15%] xl:top-1/4 border max-sm:px-6 max-sm:py-10 sm:pl-12 sm:pt-12 sm:pb-12 sm:pr-6 text-white left-[10%] space-y-6">
            <h1 className="md:text-6xl text-3xl sm:text-4xl font-cardillac">
              Maximize Your Property’s Potential with Expert Management.
            </h1>
            <h3 className="md:text-3xl text-lg sm:text-xl">
              Let your property work for you. Earn more whilst we handle every
              detail effortlessly.
            </h3>
            <p>
              Your trusted partner for hassle-free property management
              solutions..
            </p>
            <Link href={"/contactUs"}>
              <Button className="w-full mt-5 rounded-3xl bg-accent uppercase max-w-md">
                Book A Call
              </Button>
            </Link>
          </div>
          <div className="w-7/12 h-3 absolute top-[28.3%] md:top-[14%] xl:top-[24%] mt-1 rounded-md bg-white left-[22%]"></div>
        </div>
        <div className="flex2">
          <Image
            src={banner2}
            alt="banner2"
            width={1200}
            height={820}
            className="w-full h-[300px] object-cover md:h-full"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Banner;
