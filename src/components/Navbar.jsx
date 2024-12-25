import { links } from "../data";
import { Icon } from "@iconify/react";
import { useGlobalContext } from "../context.jsx";

const Navbar = () => {
  const { isDarkTheme, toggleTheme } = useGlobalContext();
  console.log(isDarkTheme);

  return (
    <nav
      className={` ${
        isDarkTheme ? "bg-slate-900 text-white" : "bg-indigo-100 "
      }`}
    >
      <div className=" py-4 flex  sm: mx-8 flex-row sm:gap-x-16 sm:items-center sm:py-6 justify-between ">
        <h2 className="text-3xl font-bold ">
          Web<span className="text-indigo-600 ">dev</span>
        </h2>
        <div className="hidden sm:flex sm:gap-x-6">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-xl tracking-wide hover:text-indigo-600 duration-300 hover:font-semibold border-indigo-600 "
              >
                {text}
              </a>
            );
          })}
        </div>
        <div>
          <button onClick={toggleTheme} className="">
            {isDarkTheme ? (
              <Icon
                icon="si:light-mode-fill"
                width="32"
                height="32"
                color="white"
              />
            ) : (
              // <BsFillMoonFill className="toggle-icon" />
              <Icon
                icon="material-symbols-light:dark-mode-rounded"
                width="32"
                height="32"
                className=" "
              />
              // <BsFillSunFill className="toggle-icon" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
