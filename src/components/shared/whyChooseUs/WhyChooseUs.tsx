import { FeatureCard } from './Feature-cards'


interface FeaturesSectionProps {
    title: string
    subtitle?: string
    features?: {
        image: string
        title: string
        description: string
    }[]
}

export function FeaturesSection({
    title,
    subtitle,
    features }: FeaturesSectionProps) {
    return (
        <section className="container section-gap">
            <div className="mx-auto max-w-[58rem] text-center">
                <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                    {title}
                </h2>
                <p className="text-muted-foreground text-sm sm:text-lg lg:text-xl">{subtitle}</p>
            </div>
            <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {features?.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        icon={feature.image}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </div>
        </section>
    )
}
