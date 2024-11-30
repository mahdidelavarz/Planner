import { Icon } from "@iconify/react/dist/iconify.js";
import AuthLayout from "../../layout/AuthLayout";

function Login() {
  return (
    <AuthLayout>
      <div className="w-96 h-[40rem] bg-primary-950 rounded-2xl shadow-md shadow-slate-950  z-50 custom-gradient flex flex-col gap-6 p-4">
        <h1 className="text-xl text-secondary-300">ورود</h1>
        <form className="w-full flex flex-col gap-8 justify-end text-secondary-300">
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="fname" className="flex justify-between px-2 ">
              <Icon icon="solar:user-rounded-broken" width="24" height="24" />
              <span>نام کاربری (ایمیل)</span>
            </label>
            <input
              type="text"
              name="fname"
              id="fname"
              className="input"
              dir="rtl"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="fname" className="flex justify-between px-2 ">
              <Icon icon="solar:lock-password-broken" width="24" height="24" />
              <span>رمز عبور </span>
            </label>
            <input
              type="text"
              name="fname"
              id="fname"
              className="input"
              dir="rtl"
            />
          </div>
          <button className="btn-full">
            ثبت نام
          </button>
        </form>
        <div className="w-full flex justify-center items-center gap-1 mt-10">
          <span className="bg-secondary-400 w-2 h-2 rounded-full"></span>
          <span className="border border-secondary-400 w-20 h-0"></span>
          <span className="text-secondary-400">or sign in with</span>
          <span className="border border-secondary-400 w-20 h-0"></span>
          <span className=" bg-secondary-400 w-2 h-2 rounded-full"></span>
        </div>
        <div className="w-full flex justify-between px-20 text-primary-600 mt-10">
          <div className="shadow-md w-14 h-14 flex justify-center items-center shadow-slate-950 rounded-xl">
            <Icon icon="mdi:google" width="38" height="38" />
          </div>
          <div className="shadow-md w-14 h-14 flex justify-center items-center shadow-slate-950 rounded-xl">
            <Icon icon="flowbite:facebook-solid" width="38" height="38" />
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}

export default Login;
