import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="">
            <div className="mt-2 pt-4 bg-black text-white">

                <div className="flex items-start flex-wrap justify-between border-y-2 p-3 sm:p-5">
                    <div className="">
                        <h2 className="text-base font-semibold mb-2">Navigation</h2>
                        <ul className="text-sm px-1">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/blogs">Blogs</Link>
                            </li>
                            <li>
                                <Link href="/projects">Projects</Link>
                            </li>
                            <li>
                                <Link href="/about">About</Link>
                            </li>
                            <li>
                                <Link href="/my-story">My Story</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footerTab">
                        <h2 className="text-base font-semibold mb-2">Follow Me</h2>
                        <ul className="text-sm px-1">
                            <li>
                                <Link href="https://linkedin.com/in/harshitclub" target="_blank">
                                    LinkedIn
                                </Link>
                            </li>
                            <li>
                                <Link href="https://github.com/harshitclub" target="_blank">
                                    Github
                                </Link>
                            </li>
                            <li>
                                <Link href="https://twitter.com/harshitclub" target="_blank">
                                    Twitter
                                </Link>
                            </li>
                            <li>
                                <Link href="https://instagram.com/harshitclub" target="_blank">
                                    Instagram
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footerTab">
                        <h2 className="text-base font-semibold mb-2">Legal Pages</h2>
                        <ul>
                            <li>
                                <Link href="/privacy-and-policy" className="text-sm px-1">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/terms-and-conditions" className="text-sm px-1">Terms Conditions</Link>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="py-5">
                    <p className="text-center">
                        Copyright © 2024{" "}
                        <Link href="/">kamal-dev.com</Link> | All
                        Right Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}