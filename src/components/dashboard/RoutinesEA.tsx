import { Icon } from "@iconify/react/dist/iconify.js";
import { Checkbox } from "@heroui/react";

function RoutinesEA() {
  return (
    <div className="w-full h-auto pb-4 rounded-lg bg-primary-900 bg-opacity-60 shadow-md p-2 text-secondary-300 flex flex-col gap-4 ">
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
          width="32"
          height="32"
          className="text-emerald-500"
        />
      </div>

      <div className="w-full h-auto flex flex-col gap-1 relative">
        {/* <div className="absolute -bottom-10 w-full ">
          <button className="w-10 h-10 rounded-full  bg-opacity-60 p-2">
            
          </button>
        </div> */}
        <div className="w-full p-2 flex gap-2 justify-between items-center text-sm">
          <div className="flex gap-2 items-center">
            <Checkbox
              size="md"
              color="success"
              className="stroke-secondary-300"
            ></Checkbox>
            <Icon
              icon="solar:sun-fog-broken"
              width="24"
              height="24"
              className="text-yellow-500"
            />
            <span>ساعت بیداری :</span>
          </div>
          <div className="flex gap-1 items-center">
            <input
              type="text"
              value={"30"}
              className="w-10 py-2 px-3 bg-primary-900 rounded-xl text-secondary-300 shadow-inner shadow-black"
            />
            <span>:</span>
            <input
              type="text"
              value={"07"}
              className="w-10 py-2 px-3 bg-primary-900 rounded-xl text-secondary-300 shadow-inner shadow-black"
            />
          </div>
        </div>
        <div className="w-full p-2 flex gap-3 justify-between items-center text-sm">
          <div className="flex gap-2 items-center">
            <Checkbox
              size="md"
              color="success"
              className="stroke-secondary-300"
            ></Checkbox>
            <Icon
              icon="healthicons:exercise-yoga-outline"
              width="24"
              height="24"
              className="text-blue-400"
            />
            <span>ورزش صبحگاهی </span>
          </div>
        </div>
        <div className="w-full p-2 flex gap-3 justify-between items-center text-sm">
          <div className="flex gap-2 items-center">
            <Checkbox
              size="md"
              color="success"
              className="stroke-secondary-300"
            ></Checkbox>
            <Icon icon="solar:book-broken" width="24" height="24" className="text-pink-400" />
            <span> مطالعه آزاد </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoutinesEA;
