import React from "react";
import SectionHeader from "../shared/header/SectionHeader";
import Image from "next/image";
import Image1 from "@/assets/Rectangle 4295 (2).png";
import Image2 from "@/assets/Rectangle 4296.png";
import Image3 from "@/assets/Rectangle 4297.png";

const images = [Image1, Image2, Image3];

const OurClients = () => {
  return (
    <div className="container">
      <div>

        <SectionHeader title="Our Clients" line />
        <p className="text-xl md:text-2xl mb-6 first-letter:font-bold first-letter:text-[1.6rem]">
          Our network of tenants includes some of the most talented and hardworking professionals in
          their fields, Magura ensures their stay is as stress-free and enjoyable as possible.
        </p>
        <p className="text-xl md:text-2xl first-letter:font-bold first-letter:text-[1.6rem]">
          We take pride in understanding the unique needs of these individuals, from ensuring privacy
          and security to offering properties that are furnished with style and comfort in mind.
        </p>
      </div>
      <div className="flex w-full flex-wrap max-sm:flex-col justify-center items-center my-20 overflow-hidden">
        {images.map((img, key) => (
          <Image
            key={key}
            src={img}
            alt={img.src}
            width={200}
            height={200}
            className="object-cover aspect-square block w-full mx-auto sm:w-1/3 hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ))}
      </div>
    </div>
  );
};

export default OurClients;
