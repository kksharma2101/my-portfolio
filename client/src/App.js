import Layout from "./components/layout/Layout";
import About from "./pages/about/About";
import TechStack from "./pages/techstack/TechStack";
import "./App.css";
import Projects from "./pages/projects/Projects";

function App() {
  return (
    <>
      <div className="app">
        <Layout />
        <About />
        <TechStack />
        <Projects />
      </div>
    </>
  );
}

export default App;
