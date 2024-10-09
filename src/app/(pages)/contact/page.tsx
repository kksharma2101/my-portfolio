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
        <section className="w-full flex justify-center mt-20">
            <div className="md:w-[50%] justify-center">
                <ContactForm />
            </div>
            <div className="borderRight"></div>
            <div className="hidden md:w-[50%] md:block p-4">
                <h2>Let`s Connect</h2>
                <p className="text-white">
                    In addition to the contact form on the left, there are several other
                    ways to get in touch with me. You can follow me on social media,
                    connect with me on LinkedIn, or send me an email. I am always happy
                    to hear from visitors and potential clients.
                </p>
                <div className="contactSocial flex width100 justifyStart">
                    <div className="contactSIcons">
                        <Link href="https://www.linkedin.com/in/kksharma21/" target="_blank">
                            <RiLinkedinBoxFill />
                        </Link>
                    </div>
                    <div className="contactSIcons">
                        <Link href="https://github.com/kksharma2101" target="_blank">
                            <RiGithubFill />
                        </Link>
                    </div>
                    <div className="contactSIcons">
                        <Link href="/" target="_blank">
                            <RiTwitterFill />
                        </Link>
                    </div>
                    <div className="contactSIcons">
                        <Link href="/" target="_blank">
                            <RiInstagramFill />
                        </Link>
                    </div>
                </div>

                <h3>
                    <Link href="mailto:kamalbsr2101@gmail.com">
                        kamalbsr2101@gmail.com
                    </Link>
                </h3>

                <p>
                    Thank you for your interest in connecting with me. I`m excited to
                    hear from you and learn more about your needs and goals. Don`t
                    hesitate to reach out, and I`ll do my best to get back to you
                    promptly.
                </p>
            </div>
        </section>
    );
}