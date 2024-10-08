import React from "react";
// import "./style.css";
// import Link from "next/link";
// import { RiExternalLinkLine } from "react-icons/ri";
import AsideSection from "@/components/AsideSection";
// import { BsDownload } from "react-icons/bs";

export default function About() {
    return (

        <section className="mx-4 mt-20">
            <div className="flex items-start justify-center w-full lg:px-2">
                <article className="md:px-2 lg:pr-4 flex w-full md:w-[70%] flex-col text-justify">

                    <p>
                        Hi, I am Komal Sharma, born and raised in the vibrant city of Bulandshahr,
                        Uttar Pradesh, India in 2000, I am a full stack web developer with a
                        passion for both front-end and back-end technologies, I have the
                        skills and expertise to create dynamic and engaging websites that will
                        captivate the audience.
                    </p>

                    <p className="my-4">
                        Whether you need a simple landing page or a complex web application, I
                        have the knowledge and experience to make it happen. From HTML5 and
                        CSS3 to JavaScript and React.js and Tailwind, I use the latest technologies to
                        ensure the website is not only visually stunning, but also performant
                        and user-friendly.{" "}
                    </p>

                    <div className="border-b-black border opacity-15"></div>

                    <h2 className="my-2 font-bold text-xl font-serif">First Computer Interaction</h2>

                    <p className="mb-4">
                        It all started in the year 2012, when I was just a tiny tot attending
                        my school. I still vividly remember the day when my computer
                        teacher took us to the computer lab for the first time.
                    </p>

                    <p className="mb-4">
                        As a curious child, I was in awe of this machine with a screen and
                        keyboard. My teacher showed us how to operate the computer and gave us
                        a task to type our names with the keyboard. As soon as I typed my
                        name, I was overjoyed and felt a sense of accomplishment.{" "}
                    </p>

                    <p className="mb-4">
                        Little did I know, this small interaction with a computer would change
                        my life forever. From that day onwards, I started exploring the world
                        of computers and technology, and my love for it only grew stronger
                        with each passing day.
                    </p>

                    <p className="mb-4">
                        And today, as a full-stack web developer, I am grateful for that one
                        small moment that sparked my interest in this field.
                    </p>

                    <div className="border-b-black border opacity-15"></div>

                    <h2 className="my-2 font-bold text-xl font-serif">How I Found My Passion</h2>

                    <p className="mb-4">
                        The journey of finding one`s passion can happen in the most unexpected
                        ways. For me, it was during my 10th class when I stumbled upon my IT
                        book during a free lecture.
                    </p>{" "}

                    <p className="mb-4">
                        As I read through the book`s introduction, I came across some of the
                        biggest names in tech like Larry Page, Mark Zuckerberg, Bill Gates,
                        Satya Nadella, Sundar Pichai, etc. The book mentioned their success
                        stories, and I was intrigued.
                    </p>

                    <p className="mb-4">
                        As I delved deeper, I came across HTML and was fascinated by the
                        endless possibilities it offered. In that moment, I knew that
                        programming and business were my calling.
                    </p>{" "}

                    <p className="mb-4">
                        This realization marked the beginning of my journey as a full-stack
                        web developer, and I haven`t looked back since.
                    </p>

                    <div className="border-b-black border opacity-15"></div>

                    <div className="">
                        <h2 className="my-2 font-bold text-xl font-serif">Work Experience</h2>

                        <div className="flex justify-start items-center gap-4">
                            <p className="text-lg font-semibold">Position</p>
                            |
                            <span>Web Developer</span>
                        </div>

                        <div className="flex justify-start items-center gap-4">
                            <p className="text-lg font-semibold">Company</p>
                            |
                            <span >
                                RedPositive
                            </span>
                        </div>

                        <div className="flex justify-start items-center gap-4">
                            <p className="text-lg font-semibold">Duration</p>
                            |
                            <span>4 Months</span>
                        </div>
                    </div>

                    <div className="border-b-black border opacity-15 my-4"></div>

                    {/* <div>
                        <h2>My Education</h2>
                        <h3>Bachelor of Technology In Information Technology</h3>
                        <div className=" flex justifyStart alignCenter">
                            <p className="aboutPWidthExtra">Duration</p>
                            <span>2021 - 2024</span>
                        </div>
                        <div className="ae1 flex justifyStart alignCenter">
                            <p className="aboutPWidthExtra">University</p>
                            <span>
                                <Link href="https://aktu.ac.in/" target="_blank">
                                    Dr. A.P.J. Abdul Kalam Technical University
                                    <RiExternalLinkLine className="aboutExperienceIcon" />
                                </Link>
                            </span>
                        </div>

                        <h3>Polytechnic Diploma In Computer Science</h3>
                        <div className="flex justifyStart alignCenter">
                            <p className="aboutPWidthExtra">Duration</p>
                            <span>2018 - 2021</span>
                        </div>
                        <div className="ae2 flex justifyStart alignCenter">
                            <p className="aboutPWidthExtra">University</p>
                            <span>
                                <Link href="https://bteup.ac.in/" target="_blank">
                                    Board of Technical Education UP
                                    <RiExternalLinkLine className="aboutExperienceIcon" />
                                </Link>
                            </span>
                        </div>

                        <h3>10th Standard</h3>
                        <div className="flex justifyStart alignCenter">
                            <p id="aboutS6" className="aboutPWidthExtra">
                                Duration
                            </p>
                            <span>2017 - 2018</span>
                        </div>
                        <div className="flex justifyStart alignCenter">
                            <p className="aboutPWidthExtra">Board</p>
                            <span>
                                <Link href="https://www.cbse.gov.in/" target="_blank">
                                    Central Board of Secondary Eduction
                                    <RiExternalLinkLine className="aboutExperienceIcon" />
                                </Link>
                            </span>
                        </div>
                    </div> */}

                    <div>
                        <h2 className="my-2 font-bold text-xl font-serif">Skills</h2>
                        <p className="text-lg font-medium">
                            Frontend: <span className="font-normal text-sm">HTML5 | CSS3 | SCSS | React.js | Next.js</span>
                        </p>
                        <p className="text-lg font-semibold">
                            Backend: <span className="font-normal text-sm">Node.js | Express</span>
                        </p>
                        <p className="text-lg font-semibold">
                            Database: <span className="font-normal text-sm">MongoDB | MySQL</span>
                        </p>
                        <p className="text-lg font-semibold">
                            Version Control: <span className="font-normal text-sm">Git & Github</span>
                        </p>
                        <p className="text-lg font-semibold">
                            Other:
                            <span className="font-normal text-sm"> Material UI | Bootstrap | On-Page SEO</span>
                        </p>
                        <p className="text-lg font-semibold">
                            Deployment: <span className="font-normal text-sm">Github | Vercel | Netfily </span>
                        </p>
                        <p className="text-lg font-semibold">
                            Testing: <span className="font-normal text-sm">Postman</span>
                        </p>
                    </div>

                </article>

                <AsideSection
                    tableOfContent={[
                        { id: "aboutS1", title: "Introduction" },
                        { id: "aboutS2", title: "First Computer Interaction" },
                        { id: "aboutS3", title: "How I Found My Passion" },
                        { id: "aboutS4", title: "Work Experience" },
                        { id: "aboutS6", title: "Skills" },
                    ]}
                />
            </div>
        </section>
    );
}