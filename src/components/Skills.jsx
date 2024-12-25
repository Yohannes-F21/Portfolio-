import { skills } from "../data";
import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard";
import { useGlobalContext } from "../context.jsx";
const Skills = () => {
  const { isDarkTheme, toggleTheme } = useGlobalContext();

  return (
    <section
      className={` py-20 xl:max-w-[90%] mx-auto align-element  ${
        isDarkTheme ? "bg-slate-900 text-white" : "bg-white "
      }`}
      id="skills"
    >
      <SectionTitle text="tech stack" />
      <div className="py-16 w-5/6 mx-auto grid grid-cols-3 gap-8 md:grid-cols-4 lg:grid-cols-5">
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};
export default Skills;
