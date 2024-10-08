import React from 'react'
import { technologies } from "@/projectsData/projects"

export const Technology = () => {
    return (
        <section className='mx-4 lg:mx-5'>
            <div className="mt-2 px-3 py-3 flex justify-center flex-col items-center">
                <h1 className="text-center font-serif font-semibold text-2xl lg:text-3xl py-5">Technologies Stack</h1>
                <div className="w-full">
                    <p className="text-start">👉 including programming Languages, frameworks, databses, front-end and back-end tools, and APIs</p>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-2 my-8">
                    {
                        technologies.map((tech) => (
                            <div className="py-1 px-3 border border-black rounded-md text-center cursor-pointer hover:bg-gray-100 my-1" key={tech.id}>
                                <p className="font-medium">{tech.tech}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
