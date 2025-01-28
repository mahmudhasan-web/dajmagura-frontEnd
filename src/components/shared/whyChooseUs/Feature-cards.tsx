import Image from "next/image";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className={"flex flex-col items-center text-center"}>
      <div className="mb-4 rounded-lg  p-3">
        <Image
          src={icon}
          alt={title}
          width={200}
          height={200}
          className="lg:w-[120px] sm:w-[100px] w-[80px]  lg:h-[120px] sm:h-[100px] h-[80px] "
        />
      </div>
      <h3 className="mb-3 text-lg sm:text-xl lg:text-2xl font-semibold font-cardillac capitalize">
        {title}
      </h3>
      <p className="text-[12px] sm:text-[14px] lg:text-[16px]  text-text capitalize">
        {description}
      </p>
    </div>
  );
}
