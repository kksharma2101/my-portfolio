import Layout from "./components/layout/Layout";
import About from "./pages/about/About";
import TechStack from "./pages/techstack/TechStack";
import "./App.css";
import Projects from "./pages/projects/Projects";
import Education from "./pages/education/Education";
// import WorkExp from "./pages/workExp/WorkExp";
import Contact from "./pages/contact/Contact";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
      <div className="app">
        <Layout />
        <About />
        <Education />
        <TechStack />
        <Projects />
        {/* <WorkExp /> */}
        <Contact />
        <div className="footer pb-3 ms-3 mt-5">
          {/* <Tada> */}
          <h4 className="text-center text-white">
            Made With 😍 KAMAL &copy; 2024
          </h4>
          {/* </Tada> */}
        </div>
      </div>
      <ScrollToTop smooth />
    </>
  );
}

export default App;
