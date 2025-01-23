import { Icon } from "@iconify/react/dist/iconify.js";
import { AppLayoutProps } from "../types/PropsTypes";
// import BurgerMenu from "../components/sidebar/BurgerMenu";
function AppLayout({ title, children }: AppLayoutProps) {
  return (
    <>
      <header className="header header-gradient z-50">
        <button className="p-2">
          <Icon icon="mingcute:right-line" width="24" height="24" />
        </button>
        <span> {title} </span>
        <button className="p-2">
          <Icon icon="solar:user-broken" width="24" height="24" />
        </button>
      </header>
      <div className="w-10 h-10 bg-primary-900 shadow-sm shadow-black rounded-l-2xl flex justify-center items-center fixed top-16">
        <Icon
          icon="solar:hamburger-menu-broken"
          width="24"
          height="24"
          className="text-white"
        />
      </div>
      <main className="pt-16">{children}</main>
      <footer>
        <div className="absolute bottom-0">this is footer</div>
      </footer>
    </>
  );
}

export default AppLayout;

{
  /* <button className="p-2 rounded-lg" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <Icon icon="solar:close-square-broken" width="24" height="24" />
        ) : (
          <Icon icon="solar:hamburger-menu-broken" width="24" height="24" />
        )}
      </button> */
}
