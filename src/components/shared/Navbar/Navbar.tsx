"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import Logo from "../header/Logo";
import { Routes } from "../Route/Route";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const [sideNav, setSideNav] = useState(false);
  return (
    <div className="absolute flex h-16 md:h-20 z-50 justify-between container left-1/2 -translate-x-1/2  px-4 w-full top-0">
      <div className="my-auto">
        <Logo />
      </div>
      <div className="my-auto md:block hidden">
        <ul className="flex gap-5">
          {Routes.map((e, idx) => (
            <Link
              key={idx}
              href={e.route}
              className={`text-base ${pathName == e.route ? "text-accent font-semibold" : "text-white"
                }`}
            >
              <li>{e.label}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="my-auto md:block hidden">
        <button
          onClick={() => router.push("/contactUs")}
          className="rounded-3xl text-accent border border-accent py-3 px-10"
        >
          CONTACT US
        </button>
      </div>
      <div className="my-auto text-white md:hidden block">
        <button
          onClick={() => setSideNav(true)}
          className="text-3xl top-1 relative "
        >
          <TiThMenu className="" />
        </button>
        <motion.div
          initial={{ y: -600, opacity: 0 }}
          animate={{
            y: sideNav ? 0 : -600,
            opacity: sideNav ? 1 : 0,
            transition: { bounce: 0.5, duration: 0.9, type: "spring" },
          }}
          className={`absolute left-0 text-center bg-[#041326] w-[100%] px-10 py-16 top-0 rounded-lg z-50`}
        >
          <button
            onClick={() => setSideNav(!sideNav)}
            className="flex justify-end w-full font-extrabold text-3xl"
          >
            <IoClose />
          </button>
          <ul className=" gap-5">
            {Routes.map((e, idx) => (
              <Link
                key={idx}
                href={e.route}
                className={`${pathName == e.route
                  ? "text-accent font-semibold"
                  : "text-white"
                  }`}
              >
                <li>{e.label}</li>
              </Link>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
