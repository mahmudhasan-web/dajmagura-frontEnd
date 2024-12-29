import Image from "next/image"


interface FeatureCardProps {
    icon: string
    title: string
    description: string
    className?: string
}

export function FeatureCard({
    icon,
    title,
    description,
}: FeatureCardProps) {
    return (
        <div className={"flex flex-col items-center text-center"}>
            <div className="mb-4 rounded-lg  p-3">
                <Image src={icon} alt={title} width={200} height={200} className="lg:w-[180px] sm:w-[130px] w-[100px]  lg:h-[180px] sm:h-[130px] h-[100px] " />
            </div>
            <h3 className="mb-2 text-lg sm:text-xl lg:text-2xl font-semibold font-lora capitalize">{title}</h3>
            <p className="text-sm sm:text-lg  text-muted-foreground capitalize">{description}</p>
        </div>
    )
}

