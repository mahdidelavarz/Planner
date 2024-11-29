import AuthLayout from "../../layout/AuthLayout";
import { Icon } from "@iconify/react";

function SignUp() {
  return (
    <AuthLayout>
      <div className="w-96 h-[40rem] bg-primary-950 rounded-r-2xl shadow-md shadow-slate-950 z-50 custom-gradient flex flex-col gap-6 p-4">
        <h1 className="text-2xl text-secondary-300">ثبت نام</h1>
        <form className="w-full flex flex-col gap-8 justify-end text-secondary-200">
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="fname" className="flex justify-between px-2 ">
              <Icon icon="solar:user-rounded-broken" width="24" height="24" />
              <span>نام و نام خانوادگی</span>
            </label>
            <input
              type="text"
              name="fname"
              id="fname"
              className="p-3 rounded-xl bg-primary-900 shadow-md shadow-slate-950 text-secondary-200"
              dir="rtl"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="fname" className="flex justify-between px-2 ">
              <Icon icon="solar:letter-broken" width="24" height="24" />
              <span>ایمیل </span>
            </label>
            <input
              type="text"
              name="fname"
              id="fname"
              className="p-3 rounded-xl bg-primary-900 shadow-md shadow-slate-950 text-secondary-200"
              dir="rtl"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="fname" className="flex justify-between px-2 ">
              <Icon icon="solar:lock-password-broken" width="24" height="24 " />
              <span>رمز عبور </span>
            </label>
            <input
              type="text"
              name="fname"
              id="fname"
              className="p-3 rounded-xl bg-primary-900 shadow-md shadow-slate-950 text-secondary-200"
              dir="rtl"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="fname" className="flex justify-between px-2 ">
              <Icon icon="solar:lock-password-broken" width="24" height="24 " />
              <span> تایید رمز عبور </span>
            </label>
            <input
              type="text"
              name="fname"
              id="fname"
              className="p-3 rounded-xl bg-primary-900 shadow-md shadow-slate-950 text-secondary-200"
              dir="rtl"
            />
          </div>
          <button className="w-full rounded-xl p-3 text-secondary-100 border border-purple-900 text-xl mt-6 shadow-md shadow-slate-900 hover:shadow-inner hover:shadow-black">
            ثبت نام
          </button>
        </form>
      </div>
    </AuthLayout>
  );
}

export default SignUp;
