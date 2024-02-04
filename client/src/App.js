import Layout from "./components/layout/Layout";
import About from "./pages/about/About";
import TechStack from "./pages/techstack/TechStack";
import "./App.css";
import Projects from "./pages/projects/Projects";
import Education from "./pages/education/Education";
import Contact from "./pages/contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import Tada from "react-reveal/Tada";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="app">
        <ToastContainer />
        <Layout />
        <About />
        <Education />
        <TechStack />
        <Projects />
        {/* <WorkExp /> */}
        <Contact />
        <div className="footer pb-3 ms-3 mt-5">
          <Tada>
            <h4 className="text-center text-white">
              Made With 😍 KAMAL &copy; 2024
            </h4>
          </Tada>
        </div>
      </div>
      <ScrollToTop smooth />
    </>
  );
}

export default App;
