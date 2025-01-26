import { Icon } from "@iconify/react/dist/iconify.js";
import GradientLine from "../ui/GradientLine";

function RoutinesEA() {
  return (
    <div className="w-full h-auto pb-4 rounded-lg bg-primary-900 bg-opacity-60 shadow-md p-2 text-secondary-300 flex flex-col gap-4">
      <div className="w-full flex justify-between">
        <div className="flex gap-2">
          <Icon
            icon="solar:repeat-bold-duotone"
            width="24"
            height="24"
            className="text-purple-500"
          />
          <h2>روتین های امروز</h2>
        </div>
        <Icon
          icon="solar:add-square-broken"
          width="28"
          height="28"
          className="text-emerald-500"
        />
      </div>

      <div className="w-full h-auto flex flex-col gap-4">
        <div className="w-full p-2 flex gap-3 justify-between items-center">
          <div className="flex gap-2 items-center">
            <input type="checkbox" />
            <Icon
              icon="solar:sun-fog-broken"
              width="24"
              height="24"
              className="text-orange-400"
            />
            <span>ساعت بیداری :</span>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="text"
              className="w-28 rounded-md bg-primary-700 shadow-inner shadow-black text-secondary-300 outline-none px-2 py-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoutinesEA;
