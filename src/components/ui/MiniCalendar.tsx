import { Icon } from "@iconify/react/dist/iconify.js";

function MiniCalendar() {
  return  <div className="w-full h-16  bg-primary-900  rounded-lg flex gap-6 justify-center items-center text-secondary-300 bg-opacity-60 shadow-md">
  <Icon
    icon="solar:round-alt-arrow-right-broken"
    width="28"
    height="28"
    className="text-primary-400"
  />
  <div className="flex flex-col">
    <span>1</span>
    <span>شنبه</span>
  </div>
  <div className="flex flex-col text-teal-400">
    <span>2</span>
    <span>یکشنبه</span>
  </div>
  <div className="flex flex-col">
    <span>3</span>
    <span>دوشنبه</span>
  </div>
  <div className="flex flex-col">
    <span>4</span>
    <span>سه شنبه</span>
  </div>
  <Icon
    icon="solar:round-alt-arrow-right-broken"
    width="28"
    height="28"
    className="rotate-180 text-primary-400"
  />
</div>;
}

export default MiniCalendar;
