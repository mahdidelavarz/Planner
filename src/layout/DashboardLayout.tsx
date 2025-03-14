import { Icon } from "@iconify/react/dist/iconify.js";
import { DashboardLayoutProps } from "../types/PropsTypes";
import { useState } from "react";
import BurgerMenu from "../components/sidebar/BurgerMenu";
// import BurgerMenu from "../components/sidebar/BurgerMenu";
function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="header header-gradient z-50">
        <button className="p-2" onClick={() => setIsOpen(true)}>
          <Icon
            icon="solar:hamburger-menu-broken"
            width="24"
            height="24"
            className="text-white"
          />
        </button>
        <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        <span> داشبورد </span>
        <button className="p-2">
          <Icon icon="lineicons:search-2" width="24" height="25" />
        </button>
      </header>
      <main className="pt-16">{children}</main>
      <footer>
        <div className="absolute bottom-0">this is footer</div>
      </footer>
    </>
  );
}

export default DashboardLayout;
