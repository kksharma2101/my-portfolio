import About from "@/components/home/About";
import Introduction from "@/components/home/Introduction";
import { Project } from "@/components/home/Project";
import { Technology } from "@/components/home/Technology";

export default function Home() {
  return (
    <>
      <div className="">
        <Introduction />
        <About />
        <Project />
        <Technology />
      </div>
    </>
  );
}
