import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { useGlobalContext } from "../context.jsx";

const Hero = () => {
  const { isDarkTheme, toggleTheme } = useGlobalContext();

  return (
    <div
      className={`py-24 ${
        isDarkTheme ? "bg-slate-900 text-white" : "bg-indigo-200 "
      }`}
    >
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-6xl  font-bold tracking-wider font-mono">
            I'm Yohannes Fantahun
          </h1>
          <p
            className={`mt-4 text-3xl  capitalize tracking-wide font-mono ${
              isDarkTheme ? "text-white" : "text-slate-700"
            } `}
          >
            Full-Stack Web Developer
          </p>
          <p
            className={`mt-2 text-lg  capitalize tracking-wide ${
              isDarkTheme ? "text-white" : "text-slate-700"
            } `}
          >
            turning ideas into interactive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/Yohannes-F21">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-indigo-600 duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/yohannes-fantahun-449300258/">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-indigo-600 duration-300" />
            </a>
            <a href="#">
              <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-indigo-600 duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};
export default Hero;
