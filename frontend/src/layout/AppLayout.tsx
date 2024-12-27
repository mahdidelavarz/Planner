import { Icon } from "@iconify/react/dist/iconify.js";
import { props } from "../types/AppLayoutType";
function AppLayout({ title } : props) {
  return (
    <header className="header header-gradient">
      <button className="p-2 rounded-lg">
      <Icon icon="solar:hamburger-menu-broken" width="24" height="24" />
      </button>
      <span> {title} </span>
      <button className="p-2 rotate-180">
        <Icon icon="mingcute:right-line" width="24" height="24" />
      </button>
    </header>
  );
}

export default AppLayout;
