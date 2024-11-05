import React from "react";
import Link from "next/link";
import {
  RiExternalLinkLine,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from "react-icons/ri";

interface TableOfContentItem {
  id: string;
  title: string;
}

interface AsideSectionProps {
  tableOfContent: TableOfContentItem[];
}

const AsideSection: React.FC<AsideSectionProps> = ({ tableOfContent }) => {
  return (
    <aside className="w-[30%] border-none sticky top-16 rounded-md bg-black p-4 hidden md:block">
      <div className="">
        <h2 className="font-normal m-1 text-white text-2xl ">
          Table of Content
        </h2>

        <ul className="my-3 text-white list-inside list-disc text-sm">
          {tableOfContent.map((item, index) => (
            <li key={index} className="mb-2">
              <a href={`#${item.id}`}>{item.title}</a>
            </li>
          ))}
          <li>
            <Link href="">Download My Resume</Link>
          </li>
        </ul>

        <p className="text-white my-5 pl-1">
          <Link
            href="mailto:kamalbsr2101@gmail.com"
            className="flex items-center gap-2"
          >
            kamalbsr2101@gmail.com
            <RiExternalLinkLine className="text-white" />
          </Link>
        </p>
      </div>

      <div className="flex items-center justify-center gap-4">
        <Link
          href="https://github.com/kksharma2101"
          target="_blank"
          className="text-white text-2xl ml-2"
        >
          <RiGithubFill />
        </Link>
        <Link
          href="https://www.linkedin.com/in/kksharma21/"
          target="_blank"
          className="text-white text-2xl ml-2"
        >
          <RiLinkedinBoxFill />
        </Link>
        <Link href="/" target="_blank" className="text-white text-2xl ml-2">
          <RiTwitterFill />
        </Link>
        <Link href="/" target="_blank" className="text-white text-2xl ml-2">
          <RiInstagramFill />
        </Link>
      </div>
    </aside>
  );
};

export default AsideSection;
