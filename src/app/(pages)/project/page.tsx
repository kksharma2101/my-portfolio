import { projects } from '@/projectsData/projects'
import Link from 'next/link'
import React from 'react'
import { RiExternalLinkLine, RiGithubFill } from 'react-icons/ri'

const data = projects

export default function page() {
    return (
        <div className="mx-4 mt-14">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 pt-5">
                {
                    data.map((item) => (
                        <div className="bg-black rounded-md text-white p-4 flex flex-col justify-between hover:bg-white hover:text-black hover:border-black border cursor-pointer" key={item.id}>
                            <div className="flex items-center justify-between">
                                <Link href={item.codeLink} className='hover:text-blue-600 text-xl'>
                                    <RiGithubFill />
                                </Link>
                                <Link href={item.liveLink} className='hover:text-blue-600 text-xl'>
                                    <RiExternalLinkLine />
                                </Link>
                            </div>
                            <h1 className="text-xl font-bold font-serif pt-2">{item.title}</h1>
                            <p className="text-sm text-justify py-2">{item.desc}</p>
                            <p className=" ">{item.tech}</p>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}
