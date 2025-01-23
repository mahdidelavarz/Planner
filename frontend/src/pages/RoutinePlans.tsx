import { Icon } from "@iconify/react/dist/iconify.js";
import AppLayout from "../layout/AppLayout";

function RoutinePlans() {
  return (
    <div className="w-full h-[100vh] bg-primary-950">
      <AppLayout title="روتین">
        <main className="w-full pt-20 flex flex-wrap gap-8 px-4">
          <div className="col-span-6 overflow-hidden h-48 cart-gradient relative rounded-xl shadow-sm shadow-black w-[350px] cursor-pointer">
            <div className="w-full h-full water rotate-180 z-0 shadow-inner shadow-black"></div>
            <div className="w-full flex justify-center items-center absolute bottom-4   rounded-full text-secondary-100">
              15%
            </div>
            <div className="w-full h-48  rounded-xl shadow-md shadow-black overflow-hidden absolute top-0  z-50">
              <div className="w-full h-10 rounded-t-xl flex justify-between items-center px-2 text-xs text-secondary-100 ">
                <div className="w-8 h-8 rounded-full z-50">
                  <Icon
                    icon="solar:arrow-right-up-broken"
                    width="24"
                    height="24"
                  />
                </div>
                <span>روتین روزهای کاری</span>
                <span className="text-emerald-500 text-[9px]">فعال</span>
              </div>
              <div className="w-full flex text-xs p-2 flex-col gap-2 text-secondary-100">
                <div className="w-full flex justify-between z-50">
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
              </div>
            </div>
          </div>
        </main>
      </AppLayout>
    </div>
  );
}

export default RoutinePlans;
