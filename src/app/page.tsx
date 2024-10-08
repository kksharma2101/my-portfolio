import About from "@/components/home/About";
import Introduction from "@/components/home/Introduction";
import { Project } from "@/components/home/Project";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <div className="">
        <Navbar />
        <Introduction />
        <About />
        <Project />
      </div>
    </>
  );
}
