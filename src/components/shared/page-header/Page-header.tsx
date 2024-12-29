import Image from 'next/image'

interface PageHeaderProps {
    title: string
    backgroundImage: string
    className?: string
}

export function PageHeader({
    title,
    backgroundImage,
}: PageHeaderProps) {
    return (
        <div className="relative h-[250px] w-full overflow-hidden lg:h-[400px]">
            {/* Background Image */}
            <Image
                src={backgroundImage}
                alt=""
                fill
                className="object-cover"
                priority
                sizes="100vw"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-primary_bg" />

            {/* Content */}
            <div className="relative flex h-full items-center justify-center px-4 max-w-3xl mx-auto">
                <h1 className="text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                    {title}
                </h1>
            </div>
        </div>
    )
}

