"use client";

import Image from "next/image";
import Button from "../shared/Button/Button";
import ZeroPercentImage from "@/assets/Zero-Down_og_image.jpg"; // Updated image import
import { useRouter } from "next/navigation";

export default function ContactService() {
  const router = useRouter();

  return (
    <section className="container section-gap py-20">
      <div className="grid gap-10 md:grid-cols-2 items-center">
        <div className="relative h-[300px] w-full">
          <Image
            src={ZeroPercentImage} // Updated image usage
            alt="0% service charge"
            fill
            className="object-fit h-[250px] rounded-lg"
            priority
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-cardillac">
            Why Pay Unnecessary Service Charges?
          </h2>
          <p className="text-lg text-muted-foreground">
            With flexible pricing options tailored to your needs, enjoy
            professional management without any service charge. Contact us today for a personalised quote.
          </p>
          <Button
            onClick={() => router.push("/contactUs")}
            className="bg-accent rounded-full px-8 text-black font-medium"
          >
            CONTACT US
          </Button>
        </div>
      </div>
    </section>
  );
}
