import { Icon } from "@iconify/react/dist/iconify.js";
import { DashboardLayoutProps } from "../types/PropsTypes";
import { useState } from "react";
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

        <div
          className={`calc-width h-[100vh] bg-primary-950 flex flex-col shadow-sm shadow-black sidebar absolute top-0 -right-[100vw] ${
            isOpen ? "right-0" : "-right-[100vw]"
          }`}
        >
          <div className="flex justify-between px-6 h-16 items-center  border-primary-900 text-secondary-300">
            <div className="flex h-full items-center justify-center gap-1">
              <Icon icon="solar:user-broken" width="28" height="28" />
              <div className="flex flex-col items-start">
                <span>مهدی دلاور</span>
                <span className="text-[10px]">mdelever77@gmail.com</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)}>
              <Icon
                icon="solar:close-square-broken"
                width="32"
                height="32"
                className="text-rose-400 cursor-pointer"
              />
            </button>
          </div>
          <div className="w-full h-[2px] bg-gradient-to-l from-secondary-400 opacity-60"></div>
        </div>
        <div
          className={`w-[100px] h-[100vh] bg-primary-900 opacity-30 absolute top-0 left-0 sidebar ${
            isOpen ? "left-0 opacity-25" : "-left-[100vw] opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        ></div>

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
