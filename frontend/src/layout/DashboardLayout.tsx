import { Icon } from "@iconify/react/dist/iconify.js";
import { DashboardLayoutProps } from "../types/PropsTypes";
// import BurgerMenu from "../components/sidebar/BurgerMenu";
function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <header className="header header-gradient z-50">
        <button className="p-2">
          <Icon
            icon="solar:hamburger-menu-broken"
            width="24"
            height="24"
            className="text-white"
          />
        </button>

        <span> داشبورد </span>
        <button className="p-2">
          <Icon icon="solar:user-broken" width="24" height="24" />
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
