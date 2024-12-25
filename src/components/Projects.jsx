import ProjectsCard from "./ProjectsCard";
import { projects } from "../data";
import SectionTitle from "./SectionTitle";
import { useGlobalContext } from "../context.jsx";

const Projects = () => {
  const { isDarkTheme } = useGlobalContext();
  return (
    <section
      className={` py-20 align-element ${
        isDarkTheme ? "bg-slate-900 text-white" : "bg-slate-100 "
      }`}
      id="projects"
    >
      <SectionTitle text="Projects" />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
export default Projects;
