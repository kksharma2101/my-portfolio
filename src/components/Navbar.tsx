import Link from 'next/link'
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
// import "../app/globals.css";

const Navbar = () => {
    const [showToggle, SetShowToggle] = useState("small")

    const handleToggle = () => {
        if (showToggle == true) {

        }
    }
    return (
        <div>
            <div className="fixed min-w-full flex justify-between items-center p-2">
                <div className="">
                    <h1 className="font-sans font-extrabold text-black p-2">KamalDev.</h1>
                </div>

                <div className="">
                    <div className="absolute -left-full">
                        <ul className='hidden sm:block'>
                            <li className="">
                                <Link href={"/about"}>Home</Link>
                            </li>
                            <li className="">
                                <Link href={"/about"}>Projects</Link>
                            </li>
                            <li className="">
                                <Link href={"/about"}>Education</Link>
                            </li>
                            <li className="">
                                <Link href={"/about"}>Technology</Link>
                            </li>
                            <li className="">
                                <Link href={"/about"}>About</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="">
                        <GiHamburgerMenu className='sm:hidden cursor-pointer' />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar