import { QuoteIcon } from 'lucide-react'



interface TestimonialCardProps {
    quote: string
}

export function NewTestimonialCard({
    quote,
}: TestimonialCardProps) {
    return (
        <div className="flex flex-col gap-6 rounded-lg bg-white p-6 shadow-sm md:flex-row md:items-start md:gap-8">
            {/* Image container with fixed aspect ratio */}


            {/* Content container */}
            <div className="relative flex flex-1 flex-col justify-between">
                {/* Quote mark top left */}
                <QuoteIcon className="absolute -left-2 -top-2 h-8 w-8 text-gray-200" />

                {/* Quote text */}
                <blockquote className="mb-4 sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-700 mt-6 font-cardillac">
                    {quote}
                </blockquote>

                {/* Author info */}


                {/* Quote mark bottom right */}
                <QuoteIcon className="absolute -bottom-3 right-0 h-8 w-8 rotate-180 text-gray-200" />
            </div>
        </div>
    )
}

