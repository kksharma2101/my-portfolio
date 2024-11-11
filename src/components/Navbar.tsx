'use client'
import { useState } from 'react';
import Link from 'next/link';
import { GiCancel, GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        if (showMenu == false) setShowMenu(true);
        else setShowMenu(false)
    };

    return (
        <nav>
            <div className="min-w-max mx-auto px-2 sm:px-4 lg:px-6">

                <div className="flex items-center justify-between h-16">

                    <div className="w-full flex items-center justify-between">

                        <Link href="/" className="text-black text-2xl font-extrabold">
                            Kamal-Dev.
                        </Link>

                        <div className={showMenu == true ? "smallScreen absolute w-[50%] h-[100vh] bg-black left-0 p-3 top-0 sm:hidden " : "bigScreen hidden sm:block"}>

                            <ul
                                className={showMenu == true
                                    ?
                                    "flex items-start flex-col gap-5 text-white"
                                    :
                                    "flex items-center gap-3"}>
                                <li>
                                    <Link href="/"
                                    >Home</Link>
                                </li>
                                <li>
                                    <Link href="/about">About</Link>
                                </li>
                                <li>
                                    <Link href="/project">Project</Link>
                                </li>
                                {/* <li>
                                    <Link href="/technology">Technology</Link>
                                </li> */}
                                <li>
                                    <Link href="/contact">Contact</Link>
                                </li>
                                {/* <li className="navMail">
                                    <Link href="mailto:harshitclub@gmail.com">
                                        Mail <RiExternalLinkLine className="navMailIcon" />
                                    </Link>
                                </li> */}
                            </ul>
                        </div>

                        <div className="cursor-pointer w-fit sm:hidden">
                            {
                                showMenu == false ? (<GiHamburgerMenu onClick={toggleMenu}
                                    className='w-6 h-16'
                                />) : (<GiCancel onClick={toggleMenu}
                                    className='w-6 h-14'
                                />)
                            }
                        </div>

                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;