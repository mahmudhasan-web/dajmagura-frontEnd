'use client'
import { lora } from '@/app/fonts/fonts';
import React from 'react';
import { Routes } from '../Route/Route';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {

    const pathName = usePathname()
    return (
        <div>
            <div>
                <h1 className={``}>Magura</h1>
            </div>
            <div>
                <ul>
                    {
                        Routes.map((e, idx) =>
                            <Link href={e.route} className={`${pathName == e.route ? "text-accent font-semibold" : "text-white"}`} ><li>{e.label}</li></Link>
                        )
                    }
                </ul>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Navbar;