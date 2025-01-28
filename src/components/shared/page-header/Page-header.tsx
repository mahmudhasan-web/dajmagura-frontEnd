import Image from "next/image";

interface PageHeaderProps {
  title: string;
  backgroundImage?: string;
  className?: string;
  multiple?: string[];
}

export function PageHeader({
  title,
  backgroundImage,
  multiple,
}: PageHeaderProps) {
  return (
    <div className="relative h-[300px] w-full overflow-hidden lg:h-[600px]">
      {/* Background Image */}
      {backgroundImage ? (
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      ) : (
        multiple &&
        multiple.length > 0 &&
        multiple.map((src, idx) => {
          return (
            <div key={idx} className="inline-block h-full w-full md:w-1/3">
              <Image
                src={src}
                alt=""
                width={500}
                height={500}
                className="object-cover h-full w-full"
                priority
              />
            </div>
          );
        })
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c2c2a50] to-[#0c2c2aaa]" />

      {/* Content */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 flex h-full items-center justify-center px-4 w-full md:max-w-3xl mx-auto">
        <h1 className="text-center text-3xl font-medium text-white md:text-4xl lg:text-6xl font-cardillac">
          {title}
        </h1>
      </div>
    </div>
  );
}
