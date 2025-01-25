import { Icon } from "@iconify/react/dist/iconify.js";

function RoutinesEA() {
  return (
    <div className="w-full h-auto pb-4 rounded-lg bg-primary-900 bg-opacity-60 shadow-md p-2 text-secondary-300 flex flex-col gap-8">
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
      <div className="w-full h-auto grid grid-cols-3 gap-4">
        <div className="col-span-1  flex flex-col">
          <div className="h-24 bg-primary-700 rounded-lg"></div>
          <span>خوابیدن</span>
        </div>
        <div className="col-span-1 h-24 bg-primary-700"></div>
        <div className="col-span-1 h-24 bg-primary-700"></div>
      </div>
    </div>
  );
}

export default RoutinesEA;
