import React from "react";

const SectionHeader = ({
  title,
  line,
  center,
  className,
}: {
  title: string;
  line?: boolean;
  center?: boolean;
  className?: string;
}) => {
  if (line) {
    return (
      <div
        className={`${
          className && className
        } md:flex items-center my-8 md:my-12 gap-6`}
      >
        <div className="text-4xl md:text-5xl font-bold font-cardillac">
          {title}
        </div>
        <div className="flex items-center max-md:mt-4 flex-1">
          <div className="w-1/4 min-w-[200px] md:min-w-[400px] h-3 bg-accent"></div>
          <div className="w-full h-1 bg-accent"></div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div
          className={`text-3xl my-4 md:my-5 !leading-normal md:text-4xl font-semibold font-cardillac ${
            center && "text-center"
          } ${className && className}`}
        >
          {title}
        </div>
      </div>
    );
  }
};

export default SectionHeader;
