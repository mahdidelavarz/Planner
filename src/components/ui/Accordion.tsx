import { useState } from "react";
import { accordionProps } from "../../types/PropsTypes";
import { Icon } from "@iconify/react/dist/iconify.js";

const Accordion = ({ title, icon, qty, color, children }: accordionProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="w-full flex flex-col gap-3 ">
      <div
        className="w-full px-2 flex justify-between py-3 rounded-lg duration-300  hover:bg-primary-900"
        onClick={() => setIsActive(!isActive)}
      >
        <div className="flex gap-3">
          {icon}
          <span>{title}</span>
        </div>
        <Icon
          icon="solar:alt-arrow-left-bold-duotone"
          width="24"
          height="24"
          className={`${color} transition-all duration-300 ${
            isActive && "-rotate-90"
          }`}
        />
      </div>
      <div
        className={`w-full h-0 flex flex-col items-start px-4 gap-2 overflow-hidden transition-all duration-500 ${
          isActive ? qty : "h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
