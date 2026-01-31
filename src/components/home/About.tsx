import React from "react";
// import "./style.css";
import Link from "next/link";
// import Image from "next/image";

export default function About() {
    return (
        <section className="mx-4 lg:mx-5">
            <div className="aboutCoverImage mt-2 px-3 pt-3">

                <h1 className="text-center font-serif font-semibold text-2xl lg:text-3xl pt-4">Get to Know Me</h1>
                <p className="pt-5 font-serif text-justify">
                    Hi, I`m Kamal Sharma, a web developer who specializes in creating
                    dynamic and responsive websites and web applications. I use the latest
                    technologies such as React.js, Next.js, Node.js, and more to build
                    websites that are not only visually appealing but also high-performing
                    and scalable.
                </p>
                <p className="pt-3 font-serif text-justify">
                    In addition to my technical skills, I also understand the importance
                    of on-page SEO in driving relevant traffic to a website. By optimizing
                    the content and HTML source code of each page, I ensure that the
                    websites I create rank higher on search engines, improving user
                    engagement and overall performance.
                </p>
                <p className="pt-3 font-serif text-justify">
                    I`m passionate about creating meaningful digital experiences that help
                    businesses and individuals achieve their goals. Let`s work together to
                    bring your ideas to life and make a difference on the web!
                </p>

                <div className="home-about flex items-center gap-4 py-5">
                    <div>
                        <Link href="/about">
                            <button>Know More</button>
                        </Link>
                    </div>
                    <div>
                        <Link href="/contact">
                            <button>Contact</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
