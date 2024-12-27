import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { Icon } from "@iconify/react";

const ProjectsCard = ({ url, img, github, title, text, techStack }) => {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300">
      <img
        src={img}
        alt={title}
        className="w-full object-scale-down rounded-t-lg h-64"
      />
      <div className="capitalize p-8">
        <h2 className="text-xl tracking-wide font-medium text-black">
          {title}
        </h2>
        <div className="flex gap-x-3 mt-2">
          {techStack.map((tech) => {
            return <Icon icon={tech} className="h-10 w-10 text-indigo-500" />;
          })}
        </div>
        <p className="mt-4 text-slate-700 leading-loose">{text}</p>
        <div className="mt-4 flex gap-x-4">
          <a href={url}>
            <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
          <a href={github}>
            <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </a>
        </div>
      </div>
    </article>
  );
};
export default ProjectsCard;
