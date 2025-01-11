import { QuoteIcon } from 'lucide-react'
import Image from 'next/image'



interface TestimonialCardProps {
    quote: string
    author: string
    company: string
    imageSrc: string
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
                <div className='bg-white  absolute w-5/6 h-[100px] -bottom-1 imageDiv'>
                    <div className='flex flex-col items-start justify-end h-full'>
                        <p className="text-md font-semibold text-gray-900">
                            {author}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">{company}</p>
                    </div>
                </div>
            </div>

            {/* Content container */}
            <div className="relative flex flex-1 flex-col justify-between">
                {/* Quote mark top left */}
                <QuoteIcon className="absolute -left-2 -top-2 h-8 w-8 text-gray-200" />

                {/* Quote text */}
                <blockquote className="mb-4 text-lg leading-relaxed text-gray-700 mt-6 font-cardillac">
                    {quote}
                </blockquote>

                {/* Author info */}


                {/* Quote mark bottom right */}
                <QuoteIcon className="absolute -bottom-3 right-0 h-8 w-8 rotate-180 text-gray-200" />
            </div>
        </div>
    )
}

