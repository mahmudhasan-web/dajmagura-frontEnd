import React from "react";
import SectionHeader from "../shared/header/SectionHeader";

const OurClients = () => {
  return (
    <div className="container">
      <SectionHeader title="Our Clients" line />
      <p className="text-xl md:text-2xl mb-6 first-letter:font-bold first-letter:text-[1.6rem]">
        Our network of tenants includes some of the most talented and
        hardworking professionals in their fields, Magura ensures their stay is
        as stress-free and enjoyable as possible.
      </p>
      <p className="text-xl md:text-2xl first-letter:font-bold first-letter:text-[1.6rem]">
        We take pride in understanding the unique needs of these individuals,
        from ensuring privacy and security to offering properties that are
        furnished with style and comfort in mind.
      </p>
      <p className="text-text_primary text-xl md:text-2xl font-semibold mt-6">
        With Magura, every property becomes an opportunity, every stay a
        memorable experience, and every client a part of our growing story.”
      </p>
      <SectionHeader title="Our Mission and Values:" />
      <p className="text-xl md:text-2xl">
        Clearly articulate what we stand for: We aim to provide property owners
        with the highest level of service, ensuring their investments are cared
        for with integrity, efficiency, and expertise.
      </p>
    </div>
  );
};

export default OurClients;
