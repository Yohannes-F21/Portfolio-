import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { useGlobalContext } from "./context.jsx";

const App = () => {
  const { isDarkTheme } = useGlobalContext();
  return (
    <main
      className={` ${isDarkTheme ? "bg-slate-900 text-white" : "bg-white "}`}
    >
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
    </main>
  );
};
export default App;
