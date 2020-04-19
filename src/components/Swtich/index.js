import React from "react";
import { IoMdMoon as Moon, IoMdSunny as Sun } from "react-icons/io";
const Swtich = () => {
  return (
    <button className="Switch">
      <Sun className="icon" />
      <Moon className="icon" />
    </button>
  );
};

export default Swtich;
