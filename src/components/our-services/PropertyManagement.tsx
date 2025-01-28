import React from "react";
import SectionHeader from "../shared/header/SectionHeader";
import Image from "next/image";
import Image2 from "@/assets/d5f9f4fec652d0a47e4b44abb17a894e_11zon.jpg";
import Image1 from "@/assets/Rectangle 36.png";
import Image3 from "@/assets/image22.png";

// Expanded images array with title and header
const images = [
  {
    img: Image1,
    title: "Tenant Management",
    header: "Comprehensive tenant support for hassle-free property management.",
  },
  {
    img: Image2,
    title: "Maintenance and Repairs",
    header:
      "Together we coordinate with trusted contractors to keep your property in top shape and address issues promptly.",
  },
  {
    img: Image3,
    title: "Financial Reporting",
    header: "Seamless handling of all property-related finances.",
  },
];

const PropertyManagement = () => {
  return (
    <div className="section-gap ">
      <SectionHeader
        className="max-w-4xl mx-auto"
        title="Comprehensive Property Management Services Designed for Your Peace of Mind.."
        center
      />
      <p className="text-xl md:text-2xl text-center">
        Whether you own one property or an entire portfolio, we handle it all.
      </p>
      <div className="flex w-full gap-3 max-sm:flex-col justify-center items-center mt-20">
        {images.map((item, key) => (
          <div key={key} className="relative group">
            <Image
              src={item.img}
              alt={item.title}
              width={200}
              height={200}
              className="object-cover object-left brightness-75 w-[250px] sm:w-[300px] md:w-[500px] aspect-square mx-auto transition-transform duration-1000 ease-in-out"
              sizes="(max-width: 300px) 100vw, 50vw"
            />

            <div className="absolute group-hover:h-full transition-all bottom-0 left-0 w-full h-[180px] bg-gradient-to-t from-[#0C2C2AD9] text-[#fefffc] flex group-hover:items-center justify-center flex-col group-hover:flex-row to-black/0">
              <div className="group-hover:opacity-0 absolute bottom-8 left-5 font-bold text-2xl sm:text-3xl lg:text-4xl font-cardillac">
                {item.title}
              </div>
              <div className="text-center opacity-0 group-hover:opacity-100 px-4">
                <div className="group-hover:opacity-100 opacity-0 font-bold text-2xl sm:text-3xl lg:text-4xl font-cardillac">
                  {item.title}
                </div>
                <p className="text-xl md:text-2xl mt-4">{item.header}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyManagement;
