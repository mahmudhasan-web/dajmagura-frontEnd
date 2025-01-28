"use client";

import Image from "next/image";
import Button from "../shared/Button/Button";
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
          <p className="text-lg text-muted-foreground">
            With flexible pricing options tailored to your needs, enjoy
            professional management without the financial strain.
          </p>
          <p className="text-lg">Contact us today for a personalized quote.</p>
          <Button
            onClick={() => router.push("/contactUs")}
            className="bg-accent rounded-full px-8  text-black font-medium"
          >
            CONTACT US
          </Button>
        </div>
      </div>
    </section>
  );
}
