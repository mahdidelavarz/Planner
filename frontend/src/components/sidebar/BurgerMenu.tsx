import { Icon } from "@iconify/react/dist/iconify.js";
import { BurgerMenuProps } from "../../types/PropsTypes";
import GradientLine from "../ui/GradientLine";
function BurgerMenu({ isOpen, setIsOpen }: BurgerMenuProps) {
  return (
    <>
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
        <GradientLine />
        <div className="w-full h-auto flex flex-col items-start px-4 py-4 gap-4">
          <h2 className="text-xs text-secondary-300">منو اصلی</h2>
          <div className="w-full px-2 flex justify-between py-3 rounded-lg duration-300  hover:bg-primary-900">
            <div className="flex gap-3">
              <Icon
                icon="solar:widget-line-duotone"
                width="22"
                height="22"
                className="text-blue-500"
              />
              <span>داشبورد</span>
            </div>
            <Icon
              icon="solar:tuning-2-broken"
              width="24"
              height="24"
              className="text-blue-500"
            />
          </div>
          <div className="w-full px-2 flex justify-between py-3 rounded-lg duration-300  hover:bg-primary-900">
            <div className="flex gap-3">
              <Icon
                icon="solar:clipboard-check-broken"
                width="22"
                height="22"
                className="text-green-400"
              />
              <span>تسک ها</span>
            </div>
            <Icon
              icon="solar:alt-arrow-left-bold-duotone"
              width="24"
              height="24"
              className="text-green-400"
            />
          </div>
          <div className="w-full px-2 flex justify-between py-3 rounded-lg duration-300 hover:bg-primary-900">
            <div className="flex gap-3">
              <Icon
                icon="solar:folder-with-files-broken"
                width="22"
                height="22"
                className="text-purple-500"
              />
              <span>برنامه ها </span>
            </div>
            <Icon
              icon="solar:alt-arrow-left-bold-duotone"
              width="24"
              height="24"
              className="text-purple-500"
            />
          </div>
          <div className="w-full px-2 flex justify-between py-3 rounded-lg duration-300  hover:bg-primary-900">
            <div className="flex gap-3">
              <Icon
                icon="solar:cup-broken"
                width="22"
                height="22"
                className="text-yellow-500"
              />
              <span>اهداف</span>
            </div>
            <Icon
              icon="solar:alt-arrow-left-bold-duotone"
              width="24"
              height="24"
              className="text-yellow-500"
            />
          </div>
          <div className="w-full px-2 flex justify-between py-3 rounded-lg duration-300  hover:bg-primary-900">
            <div className="flex gap-3">
              <Icon
                icon="solar:calendar-broken"
                width="22"
                height="22"
                className="text-rose-500"
              />
              <span>تقویم</span>
            </div>
            {/* <Icon
              icon="solar:add-circle-broken"
              width="24"
              height="24"
              className="text-rose-500"
            /> */}
          </div>
          <div className="w-full px-2 flex justify-between py-3 rounded-lg duration-300  hover:bg-primary-900">
            <div className="flex gap-3">
              <Icon
                icon="solar:file-text-broken"
                width="22"
                height="22"
                className="text-teal-500"
              />
              <span>یادداشت ها</span>
            </div>
            {/* <Icon
              icon="solar:add-circle-broken"
              width="24"
              height="24"
              className="text-teal-500"
            /> */}
          </div>

          <div className="w-full px-2 flex justify-between py-3 rounded-lg duration-300  hover:bg-primary-900">
            <div className="flex gap-3">
              <Icon
                icon="solar:book-bookmark-broken"
                width="22"
                height="22"
                className="text-fuchsia-500"
              />
              <span>خاطرات</span>
            </div>
            {/* <Icon
              icon="solar:add-circle-broken"
              width="24"
              height="24"
              className="text-fuchsia-500"
            /> */}
          </div>
        </div>
        <GradientLine />
        <div className="w-full h-auto flex flex-col items-start px-4 py-4 gap-4">
          <h2 className="text-xs text-secondary-300"> تنظیمات</h2>
          <div className="w-full px-2 flex gap-3 py-3 rounded-lg  hover:bg-primary-900">
            <Icon
              icon="solar:gallery-favourite-broken"
              width="22"
              height="22"
              className="text-yellow-400"
            />
            <span>قالب</span>
          </div>
        </div>
        <div className="w-full absolute bottom-0 h-auto px-8 py-4">
          <button className=" w-full h-12 bg-rose-500 rounded-lg flex justify-center items-center gap-4 text-secondary-200">
            <Icon icon="solar:logout-3-broken" width="24" height="24" />
            <span className="font-bold">خروج از حساب کاربری</span>
          </button>
        </div>
      </div>
      <div
        className={`w-[100px] h-[100vh] bg-primary-900 opacity-30 absolute top-0 left-0 sidebar ${
          isOpen ? "left-0 opacity-25" : "-left-[100vw] opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
    </>
  );
}

export default BurgerMenu;
