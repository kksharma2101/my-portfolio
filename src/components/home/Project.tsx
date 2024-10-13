import React from 'react'
import { projects } from "../../projectsData/projects"
import { RiExternalLinkLine, RiGithubFill } from "react-icons/ri";
import Link from 'next/link'

const projectData = projects.slice(0, 3)

export const Project = () => {

    return (
        <section className='mx-4 lg:mx-5'>
            <div className="mt-2 px-3 py-3 flex justify-center flex-col items-center">

                <h1 className="text-center font-serif font-semibold text-2xl lg:text-3xl py-5">My Projects</h1>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 pt-5">
                    {
                        projectData.slice(0, 3).map((item) => (
                            <div className="bg-black rounded-md text-white p-4 flex flex-col justify-between hover:bg-white hover:text-black hover:border-black border cursor-pointer" key={item.id}>
                                <div className="flex items-center justify-between">
                                    <Link title='GitHub link' href={item.codeLink} className='hover:text-blue-600 text-xl'>
                                        <RiGithubFill />
                                    </Link>
                                    <Link title='Live link' href={item.liveLink} className='hover:text-blue-600 text-xl'>
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

                <Link href="/project" >
                    <div className="bg-black flex items-center gap-2 cursor-pointer text-white py-1 px-2 mt-6 rounded-md hover:bg-white hover:text-black hover:border-black border">
                        Show all
                        <RiExternalLinkLine />
                    </div>
                </Link>
            </div>
        </section>
    )
}
