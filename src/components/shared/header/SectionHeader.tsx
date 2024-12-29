import React from "react";

const SectionHeader = ({ title, line }: { title: string; line?: boolean }) => {
  if (line) {
    return (
      <div className="md:flex  items-center my-8 md:my-12 gap-6">
        <div className="text-4xl md:text-5xl font-bold font-lora">{title}</div>
        <div className="flex items-center max-md:mt-4 flex-1">
          <div className="w-1/4 min-w-[250px] md:min-w-[400px] h-3 bg-primary"></div>
          <div className="w-full h-1 bg-primary"></div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="text-3xl my-4 md:my-5 md:text-4xl font-semibold font-lora">
          {title}
        </div>
      </div>
    );
  }
};

export default SectionHeader;
