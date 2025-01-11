import React from "react";
import LogoIcon from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        src={LogoIcon}
        width={200}
        className="w-[100px] md:w-[120px] hover:scale-105 transition-all"
        height={220}
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
