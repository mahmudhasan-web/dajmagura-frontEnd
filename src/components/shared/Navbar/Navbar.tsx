'use client'
import React, { useState } from 'react';
import { Routes } from '../Route/Route';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Button from '../Button/Button';
import { TiThMenu } from 'react-icons/ti';
import { motion } from "motion/react"
import { IoClose } from 'react-icons/io5';

const Navbar = () => {

    const pathName = usePathname()
    const router = useRouter()
    const [sideNav, setSideNav] = useState(false);
    return (
        <div className='absolute flex h-16  z-50 justify-around w-full top-0'>
            <div className='my-auto'>
                <h1 className={`text-3xl text-white`}>Magura</h1>
            </div>
            <div className='my-auto md:block hidden'>
                <ul className='flex gap-5'>
                    {
                        Routes.map((e, idx) =>
                            <Link key={idx} href={e.route} className={`${pathName == e.route ? "text-accent font-semibold" : "text-white"}`} ><li>{e.label}</li></Link>
                        )
                    }
                </ul>
            </div>
            <div className='my-auto md:block hidden'>
                <Button onClick={() => router.push("/contactUs")} className='rounded-3xl bg-accent'>CONTACT US</Button>
            </div>
            <div className='my-auto text-white md:hidden block'>
                <button onClick={() => setSideNav(true)} className='text-3xl top-1 relative '><TiThMenu className='' /></button>
                <motion.div initial={{ y: -600, opacity: 0 }} animate={{ y: sideNav ? 0 : -600, opacity: sideNav ? 1 : 0, transition: { bounce: .5, duration: .9, type: "spring" } }} className={`absolute left-0 text-center bg-[#041326] w-[100%] px-10 py-16 top-0 rounded-lg z-50`}>
                    <button onClick={() => setSideNav(!sideNav)} className='flex justify-end w-full font-extrabold text-3xl'><IoClose /></button>
                    <ul className=' gap-5'>
                        {
                            Routes.map((e, idx) =>
                                <Link key={idx} href={e.route} className={`${pathName == e.route ? "text-accent font-semibold" : "text-white"}`} ><li>{e.label}</li></Link>
                            )
                        }
                    </ul>
                </motion.div>
            </div>
        </div>
    );
};

export default Navbar;