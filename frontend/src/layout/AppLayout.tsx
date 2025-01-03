import { Icon } from "@iconify/react/dist/iconify.js";
import { AppLayoutProps } from "../types/PropsTypes";
import { useState } from "react";
import BurgerMenu from "../components/sidebar/BurgerMenu";
function AppLayout({ title }: AppLayoutProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header header-gradient z-50">
      <button className="p-2 rounded-lg" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <Icon icon="solar:close-square-broken" width="24" height="24" />
        ) : (
          <Icon icon="solar:hamburger-menu-broken" width="24" height="24" />
        )}
      </button>
      <BurgerMenu isOpen={isOpen} />
      <span> {title} </span>
      <button className="p-2 rotate-180">
        <Icon icon="mingcute:right-line" width="24" height="24" />
      </button>
    </header>
  );
}

export default AppLayout;
