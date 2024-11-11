// import Link from 'next/link';
import Image from 'next/image';
import React from 'react'
import { BsDownload } from 'react-icons/bs';
import { RiExternalLinkLine } from 'react-icons/ri';
// import resume from "../assests/ResumePdf.pdf";


const Introduction = () => {
    return (
        <section className='mx-4 lg:mx-5'>
            <div className="bg-black h-full flex justify-between items-center p-5 mt-16">
                <div className="text-white">
                    <h1 className="text-4xl font-bold py-4">Komal Kumar Sharma</h1>
                    <h1 className="text-3xl font-semibold font-serif">Full-Stack Web Developer</h1>
                    <p className="font-bold py-3">Hey There 👋, I`m Komal(kamal) Sharma, Web Developer <br /> Who Creates Dynamic real world Website and Web Applications.</p>

                    <div className="flex items-center gap-8 my-4">
                        {/* <Link
                        className='flex items-center px-3 py-2 bg-cyan-50 text-black rounded-md gap-1'
                        href="mailto:kamalbsr2101@gmail.com">
                        Certificate <RiExternalLinkLine />
                    </Link> */}

                        <a href="pw-certificate.pdf" className='flex items-center px-3 py-2 bg-white font-medium text-black rounded-md gap-1'>
                            Certificate <RiExternalLinkLine />
                        </a>
                        <a href="My-resume.pdf" className='flex items-center px-3 py-2 bg-white font-medium text-black rounded-md gap-1'>
                            Resume <BsDownload />
                        </a>
                    </div>
                </div>
                <div className="hidden md:block">
                    <div className="w-80 h-80 z-50 bg-[#ffffff2d] flex justify-center items-center rounded-full">
                        <div className="w-72 h-72 bg-[#9CC32733] flex justify-center items-center rounded-full">
                            <div className="second w-64 h-64 bg-[#9CC32763] flex justify-center items-center rounded-full">
                                <div className="w-56 h-56 bg-[#9CC327] flex justify-center items-center rounded-full">
                                    <Image src="/my-pic.png" alt='my-picture' width={100} height={100} className='relative -top-8 w-40 h-full' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Introduction;