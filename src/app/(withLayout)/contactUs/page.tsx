import { PageHeader } from "@/components/shared/page-header/Page-header";
import { Metadata } from "next";
import React from "react";
import anputUsBg from "@/assets/header/beautiful-shot-modern-house-kitchen-dining-room.png";

export const metadata: Metadata = {
  title: "Contact Us",
};

const Page = () => {
  return (
    <div>
      <PageHeader title="Contact Us" backgroundImage={anputUsBg.src} />
    </div>
  );
};

export default Page;
