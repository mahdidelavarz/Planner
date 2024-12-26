import { Icon } from "@iconify/react/dist/iconify.js";
function AppLayout({ title }) {
  return (
    <header className="header header-gradient">
      <button className="p-2 rounded-lg">
        <Icon icon="mingcute:right-line" width="24" height="24" />
      </button>
      <span> {title} </span>
      <button className="p-2 rounded-lg">
        <Icon
          icon="lineicons:search-2"
          width="24"
          height="25"
          className="rotate-90"
        />
      </button>
    </header>
  );
}

export default AppLayout;
