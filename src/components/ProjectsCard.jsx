import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { Icon } from "@iconify/react";
import { useGlobalContext } from "../context.jsx";

const ProjectsCard = ({ url, img, github, title, text, techStack }) => {
  const { isDarkTheme } = useGlobalContext();
  return (
    <article
      className={` rounded-lg shadow-md transition-shadow hover:shadow-[0_6px_20px_rgba(99,102,241,0.7)]   duration-300 flex flex-col h-full ${
        isDarkTheme ? "bg-slate-100" : "bg-white"
      }`}
    >
      <img
        src={img}
        alt={title}
        className="w-full object-scale-down rounded-t-lg "
      />
      <div className="capitalize p-8 flex-1">
        <h2 className="text-xl tracking-wide font-medium text-black">
          {title}
        </h2>
        <div className="flex gap-x-3 mt-2">
          {techStack.map((tech) => {
            return <Icon icon={tech} className="h-10 w-10 text-indigo-500" />;
          })}
        </div>
        <p className="mt-4 text-slate-700 leading-loose">{text}</p>
      </div>
      <div className=" flex gap-x-4 mt-auto pl-8 pb-4" id="cardFooter">
        <a href={url}>
          <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-indigo-700 duration-300" />
        </a>
        <a href={github}>
          <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-indigo-700 duration-300" />
        </a>
      </div>
    </article>
  );
};
export default ProjectsCard;
