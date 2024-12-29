"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ContentSection {
  id: number; // Unique identifier for each section
  title: string; // Title of the section
  content?: {
    text: (string | { bulletPoints: string[] })[];
  }; // Main content (can include paragraphs)
  image: string; // URL or path to the image
}

export default function DynamicSection({
  dynamicSection,
}: {
  dynamicSection: ContentSection[];
}) {
  return (
    <div className="mx-auto py-12">
      {/* Wrapper for all sections */}
      <div className="flex flex-col gap-10 md:gap-16 xl:gap-20">
        {dynamicSection.map((section) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }} // Initial animation state
            whileInView={{ opacity: 1, y: 0 }} // Visible animation state
            transition={{ duration: 0.5 }} // Animation duration
            className="grid md:grid-cols-2 gap-10 md:gap-16 xl:gap-20 items-center"
          >
            {/* Image Section */}
            {section.id % 2 !== 0 && ( // Image on the left for odd IDs
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative  w-full aspect-video  rounded-lg overflow-hidden"
              >
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={section.id === 1} // High priority for the first section image
                />
              </motion.div>
            )}

            {/* Content Section */}
            <div className="space-y-6">
              {/* Title */}
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:my-5 md:text-4xl font-semibold font-lora "
              >
                {section.title}
              </motion.h2>

              {/* Content and Bullet Points */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-gray-600 dark:text-gray-400 space-y-4"
              >
                {/* Paragraphs */}

                {/* Optional Bullet Points */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-gray-600 dark:text-gray-400 space-y-4"
                >
                  {section?.content?.text.map((item, index) => {
                    // Check if the item is a string (paragraph)
                    if (typeof item === "string") {
                      return (
                        <p
                          className="text-xl md:text-2xl first-letter:font-bold first-letter:text-[1.6rem]"
                          key={index}
                        >
                          {item}
                        </p>
                      );
                    }
                    // Check if the item is an object (bullet points)
                    if (typeof item === "object" && item?.bulletPoints) {
                      return (
                        <ul className="list-none space-y-4 mt-4" key={index}>
                          {item?.bulletPoints.map((point, bulletIndex) => (
                            <motion.li
                              key={bulletIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: bulletIndex * 0.2 }}
                              className="flex items-start"
                            >
                              <span className="mr-2 mt-1 text-paragraph">
                                •
                              </span>
                              <span className="text-xl md:text-2xl">
                                {point}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      );
                    }
                    return null; // Fallback if none of the conditions are met
                  })}
                </motion.div>
              </motion.div>
            </div>

            {/* Image Section */}
            {section.id % 2 === 0 && ( // Image on the right for even IDs
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative  w-full aspect-video  rounded-lg overflow-hidden"
              >
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
