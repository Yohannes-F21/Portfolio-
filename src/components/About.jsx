import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
import { useGlobalContext } from "../context.jsx";
const About = () => {
  const { isDarkTheme } = useGlobalContext();
  return (
    <section
      className={` py-20 ${
        isDarkTheme ? "bg-slate-900 text-white" : "bg-slate-100 "
      }`}
      id="about"
    >
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="About Me" />
          <p className=" mt-8 leading-loose">
            I am passionate about leveraging technology to solve real-world
            problems and enhance user interactions. My expertise lies in
            developing intuitive user interfaces and robust back-end systems,
            allowing me to deliver comprehensive solutions.
          </p>
          <p className=" mt-8 leading-loose">
            From the simplicity of a black & white terminal to today, I've had
            the opportunity to work with various startups, an event organizing
            company, a large organization, and a student-led design club.
            Currently, my primary focus is on creating accessible and inclusive
            products and digital experiences for diverse clients.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
