import Image from "next/image";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  imageSrc: string;
}

export function TestimonialCard({
  quote,
  author,
  company,
  imageSrc,
}: TestimonialCardProps) {
  return (
    <div className="flex flex-col gap-6 rounded-lg bg-white p-6 shadow-sm md:flex-row md:items-start md:gap-8">
      {/* Image container with fixed aspect ratio */}
      <div className="relative h-[200px] mx-auto max-w-[250px] w-full shrink-0 overflow-hidden rounded-lg md:h-[240px] md:w-[200px] lg:h-[300px] lg:w-[300px]">
        <Image
          src={imageSrc}
          alt={`image of ${author}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 200px"
        />
        {/* <div className='bg-white  z-20 w-2/3 bottom-0 imageDiv h-[200px]'> */}
        <div className="bg-white  absolute w-5/6 h-[100px] -bottom-1 imageDiv">
          <div className="flex flex-col items-start justify-end h-full">
            <p className="text-md font-semibold text-gray-900">{author}</p>
            <p className="mt-1 text-sm text-gray-500">{company}</p>
          </div>
        </div>
      </div>

      {/* Content container */}
      <div className="relative flex flex-1 flex-col justify-between">
        {/* Quote mark top left */}
        <RiDoubleQuotesL className="absolute text-4xl -left-2 -top-2 h-8 w-8 text-[#E3E3E3]" />

        {/* Quote text */}
        <blockquote className="mb-4 sm:text-lg font-nexa md:text-xl lg:text-2xl leading-relaxed text-[#041326] mt-6 ">
          {quote}
        </blockquote>

        {/* Author info */}

        {/* Quote mark bottom right */}
        <RiDoubleQuotesR className="absolute -bottom-3 text-4xl right-0 h-8 w-8  text-[#E3E3E3]" />
      </div>
    </div>
  );
}
