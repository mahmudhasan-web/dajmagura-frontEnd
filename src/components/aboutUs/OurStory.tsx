import React from "react";
import ImageContent1 from "@/assets/Rectangle 4295.png";
import ImageContent2 from "@/assets/Rectangle 4295 (1).png";
import SectionHeader from "../shared/header/SectionHeader";
import DynamicSection from "../shared/section/DynamicSection";

const OurStory = () => {
  const sections = [
    {
      id: 1,
      title: "Our Beginnings",
      content: {
        text: [
          "The name Magura represents strength, stability, and a commitment to excellence—values that are at the core of our business. We noticed a growing trend among professionals such as musicians, footballers, actors, and bankers, who often traveled to London for work but struggled to find accommodation that felt like more than just a temporary stay.",
          `Meanwhile, landlords in and around London faced the challenge of ensuring their properties were occupied by trustworthy, high-quality tenants who would respect their investments.Magura stepped in to solve both problems, offering a bespoke property management service designed to benefit landlords and tenants alike.`,
        ],
      },
      image: ImageContent1.src,
    },
    {
      id: 2,
      title: "What Sets Us Apart",
      content: {
        text: [
          "At Magura, we specialize in pairing exceptional properties with exceptional people. Our focus is on creating a seamless, worry-free experience for both landlords and our clients. By placing working professionals in meticulously managed homes, we provide a win-win solution:",
          {
            bulletPoints: [
              "For landlords, we ensure properties are well-maintained, tenants are thoroughly vetted, and income is consistent.",
              "For tenants, we offer not just a place to stay, but a space that feels like home—equipped with modern comforts and a touch of personalized luxury.",
            ],
          },
          "This dual commitment has earned Magura a reputation for trustworthiness and professionalism.",
        ],
      },
      image: ImageContent2.src,
    },
  ];

  return (
    <div>
      <SectionHeader title="Our Story" line />
      <SectionHeader title="The Story of Magura Property Management" />
      <p className="text-paragraph text-2xl">
        Magura was born out of a simple yet powerful vision: to bridge the gap
        between landlords seeking reliable tenants and traveling professionals
        in need of a truly comfortable home away from home. Founded in the heart
        of London, our company was inspired by the city’s dynamic lifestyle and
        the unique demands of its high-achieving residents and visitors.
      </p>
      <DynamicSection dynamicSection={sections} />
    </div>
  );
};

export default OurStory;
