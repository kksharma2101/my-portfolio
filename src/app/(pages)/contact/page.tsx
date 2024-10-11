import React from "react";
import {
    RiGithubFill,
    RiInstagramFill,
    RiLinkedinBoxFill,
    RiTwitterFill,
} from "react-icons/ri";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
    return (
        <section className="w-full block md:flex justify-center mt-20">
            <div className="md:w-[50%] md:mx-3">
                <ContactForm />
            </div>
            <div className="border border-y-2 hidden md:block"></div>
            <div className="mt-8 md:mt-0 md:w-[50%] md:block p-4">
                <h2 className="text-xl font-serif font-bold">Let`s Connect</h2>

                <p className="text-black my-4 text-justify">
                    In addition to the contact form on the left, there are several other
                    ways to get in touch with me. You can follow me on social media,
                    connect with me on LinkedIn, or send me an email. I am always happy
                    to hear from visitors and potential clients.
                </p>

                <div className="flex justify-start items-center gap-4 my-5">
                    <Link href="https://www.linkedin.com/in/kksharma21/"
                        className="size-8 text-2xl hover:text-blue-600"
                        target="_blank">
                        <RiLinkedinBoxFill />
                    </Link>

                    <Link href="https://github.com/kksharma2101"
                        className="size-8 text-2xl hover:text-blue-600"
                        target="_blank">
                        <RiGithubFill />
                    </Link>

                    <Link href="/"
                        className="size-8 text-2xl hover:text-blue-600"
                        target="_blank">
                        <RiTwitterFill />
                    </Link>

                    <Link href="/"
                        className="size-8 text-2xl hover:text-blue-600"
                        target="_blank">
                        <RiInstagramFill />
                    </Link>
                </div>

                <h3 className="font-bold mb-5">
                    <Link href="mailto:kamalbsr2101@gmail.com">
                        kamalbsr2101@gmail.com
                    </Link>
                </h3>

                <p className="text-justify">
                    Thank you for your interest in connecting with me. I`m excited to
                    hear from you and learn more about your needs and goals. Don`t
                    hesitate to reach out, and I`ll do my best to get back to you
                    promptly.
                </p>
            </div>
        </section>
    );
}