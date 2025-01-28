import React from "react";
import SectionHeader from "../shared/header/SectionHeader";

const OurVision = () => {
  return (
    <div>
      <div>
        <SectionHeader title="Our Vision" line />
        <p className="text-xl text-text mb-6 first-letter:font-bold first-letter:text-[1.6rem]">
          Magura is not just about property management; it’s about people. We
          are driven by a passion for creating environments where individuals
          can thrive—whether that means helping landlords feel confident in
          their investments or ensuring tenants feel truly at home.
        </p>
        <p className="text-xl text-text first-letter:font-bold first-letter:text-[1.6rem]">
          We aim to redefine the property management experience in London by
          setting new standards of excellence. Through innovation, attention to
          detail, and a personal touch, Magura continues to be the trusted
          choice for landlords and travelling professionals alike.
        </p>
        <p className="text-xl text-text_primary font-medium mt-6">
          With Magura, every property becomes an opportunity, every stay a
          memorable experience, and every client a part of our growing story.”
        </p>
      </div>
      <div className="my-20">
        <div className={` md:flex items-center my-8 md:my-8 gap-6`}>
          <div className="text-3xl md:text-4xl  font-semibold font-cardillac">
            Our Mission and Values:
          </div>
        </div>
        <p className="text-xl text-text">
          Clearly articulate what we stand for: We aim to provide property
          owners with the highest level of service, ensuring their investments
          are cared for with integrity, efficiency, and expertise.
        </p>
      </div>
    </div>
  );
};

export default OurVision;
