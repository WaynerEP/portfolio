import { createElement, useState } from "react";
import { content } from "../data";
import { FiAlignLeft, FiMoon, FiSun, FiX } from "react-icons/fi";
import { isDarkInLE, setThemeInLE } from "../utils/theme";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(false);
  const [modeNight, setModeNight] = useState(isDarkInLE());
  const [active, setActive] = useState(0);

  const handleThemeSwitch = () => {
    const theme = isDarkInLE();
    if (theme !== 'dark') {
      setThemeInLE('dark');
    } else {
      setThemeInLE('light');
    }
    const newMode = theme === 'dark' ? 'light' : 'dark';
    setModeNight(newMode);
    document.documentElement.className = newMode;
  }

  return (
    <div className="w-full flex justify-center">
      <button
        className="sm:cursor-pointer fixed top-10 left-10 z-[999] rounded-full bg-white/20 p-2 transition duration-500 dark:text-slate-300"
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? <FiX
          size={30}
          style={{ transition: 'transform 0.5s ease' }}
        /> : <FiAlignLeft
          size={30}
          style={{ transition: 'transform 0.5s ease' }}
        />}
      </button>
      <button
        className="sm:cursor-pointer mt-0.5 fixed top-10 left-24 z-[999] rounded-full bg-white/20 p-2 transition duration-500 dark:text-slate-300"
        onClick={handleThemeSwitch}
      >
        {modeNight === 'dark' ? <FiSun
          size={24}
          style={{ transition: 'transform 0.5s ease' }}
        /> : <FiMoon
          size={24}
          style={{ transition: 'transform 0.5s ease' }}
        />}
      </button>
      <nav
        className={`fixed z-[999] flex items-center gap-8 bg-slate-200/80 px-6 py-3 backdrop-blur-md rounded text-dark_primary duration-300 ${showMenu ? "bottom-10" : "bottom-[-100%]"
          }`}
      >
        {nav.map((item, i) => (
          <a
            key={item.id}
            href={item.link}
            onClick={() => setActive(i)}
            className={`text-xl p-2.5 rounded sm:cursor-pointer 
     ${i === active && "bg-blue-600 text-white"} `}
          >
            {createElement(item.icon)}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
