"use client";

import Image from "next/image";
import Image1 from "@/assets/image2323.png";
import { useRouter } from "next/navigation";

export default function ContactService() {
  const router = useRouter();

  return (
    <section className="container section-gap">
      <div className="grid gap-10 md:grid-cols-2 items-center">
        <div className="relative h-[300px] w-full">
          <Image
            src={Image1}
            alt="Professional looking at money"
            fill
            className="object-cover h-[250px] rounded-lg"
            priority
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-cardillac">
            Why pay unnecessary service charges?
          </h2>
          <p className=" text-text_primary">
            With flexible pricing options tailored to your needs, enjoy
            professional management without the financial burden.
          </p>
          <p className="">
            Get in touch with us today for a personalised quote.
          </p>
          <button
            onClick={() => router.push("/contactUs")}
            className="rounded-3xl text-sm text-accent border border-accent py-2 px-10"
          >
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
}
