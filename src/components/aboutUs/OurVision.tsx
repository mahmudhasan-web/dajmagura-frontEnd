import React from "react";
import SectionHeader from "../shared/header/SectionHeader";

const OurVision = () => {
  return (
    <div className="container">
      <div>
        <SectionHeader title="Our Vision" line />
        <p className="text-xl md:text-2xl mb-6 first-letter:font-bold first-letter:text-[1.6rem]">
          Magura is not just about property management; it’s about people. We
          are driven by a passion for creating environments where individuals
          can thrive—whether that means helping landlords feel confident in
          their investments or ensuring tenants feel truly at home.
        </p>
        <p className="text-xl md:text-2xl first-letter:font-bold first-letter:text-[1.6rem]">
          We aim to redefine the property management experience in London by
          setting new standards of excellence. Through innovation, attention to
          detail, and a personal touch, Magura continues to be the trusted
          choice for landlords and travelling professionals alike.
        </p>
        <p className="text-text_primary text-xl md:text-2xl font-semibold mt-6">
          With Magura, every property becomes an opportunity, every stay a
          memorable experience, and every client a part of our growing story.
        </p>
      </div>
      <div className="my-20">
        <SectionHeader title="Our Mission and Values:" />
        <p className="text-xl md:text-2xl">
          Clearly articulate what we stand for: We aim to provide property
          owners with the highest level of service, ensuring their investments
          are cared for with integrity, efficiency, and expertise.
        </p>
      </div>
    </div>
  );
};

export default OurVision;
