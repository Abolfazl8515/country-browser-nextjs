import { useDarkMode } from "@/providers/DarkModeProvider";
import { Moon, Sun } from "lucide-react";

const ToggleDarkMode = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <li onClick={toggleDarkMode} className="list-none w-10 h-10 rounded-2xl cursor-pointer flex justify-center items-center bg-primary-600">
      <div>
        {!isDarkMode ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5 text-secondary-100" />
        )}
      </div>
    </li>
  );
};

export default ToggleDarkMode;
