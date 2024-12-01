import { Icon } from "@iconify/react/dist/iconify.js";

function RoutinePlans() {
  return (
    <div className="w-full h-[100vh] bg-primary-950">
      <header className="w-full h-14 shadow-sm header-gradient shadow-slate-950 flex justify-between items-center px-4 text-secondary-200 gap-4 fixed top-0 rounded-b-2xl">
        <button className="p-2 rounded-lg">
          <Icon icon="mingcute:right-line" width="24" height="24" />
        </button>
        <span> روتین روزانه </span>
        <button className="p-2 rounded-lg">
          <Icon
            icon="lineicons:search-2"
            width="24"
            height="25"
            className="rotate-90"
          />
        </button>
      </header>
      <main className="w-full pt-20 grid grid-cols-6 gap-4 px-4">
        <div className="col-span-3 h-40 bg-secondary-900 rounded-xl shadow-md shadow-slate-900 flex justify-center items-center flex-col text-secondary-200 hover:shadow-inner hover:shadow-slate-950 cursor-pointer">
          <Icon icon="flowbite:plus-outline" width="60" height="60" />
          <span>ایجاد روتین جدید</span>
        </div>
        <div className="col-span-3 h-40 bg-secondary-900 rounded-xl shadow-md shadow-slate-900 ">
          <div className="w-full h-8 bg-secondary-800  rounded-t-xl flex justify-between items-center px-2 text-xs text-secondary-200">
            <span>روتین روزهای فرد</span>
            <span className="text-emerald-400 text-[9px]">فعال</span>
          </div>
          <div className="w-full flex text-xs p-2 flex-col gap-2 text-secondary-400">
            <div className="w-full flex justify-between">
              <span>ساعت بیداری :</span>
              <span>07:00 </span>
            </div>
            <div className="w-full flex justify-between">
              <span> مدت مطالعه :</span>
              <span>1 ساعت </span>
            </div>
            <div className="w-full flex justify-between">
              <span> مدت ورزش :</span>
              <span>1 ساعت </span>
            </div>
            <div className="w-full flex justify-between">
              <span> ساعت خواب :</span>
              <span>22:00 </span>
            </div>
            {/* <div className="w-full flex justify-center text-[11px]">
            <span className="w-28 h-4 bg-third-500 rounded">مشاهده بقیه</span>
            </div> */}
          </div>

        </div>
      </main>
    </div>
  );
}

export default RoutinePlans;
