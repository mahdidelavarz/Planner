import AuthLayout from "../../layout/AuthLayout";
// import { useForm, SubmitHandler } from "react-hook-form";
// import { Icon } from "@iconify/react";

// type Inputs = {
//   fname: string;
//   email: string;
//   password: number;
//   confirmPassword: number;
// };

function SignUp() {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<Inputs>();
  // const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <AuthLayout>
      {/* <div className="w-96 h-auto bg-primary-950 rounded-2xl shadow-md shadow-slate-950 z-50 custom-gradient flex flex-col gap-6 p-4">
        <h1 className="text-2xl text-secondary-300">ثبت نام</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-8 justify-end text-secondary-200"
        >
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="fname" className="flex justify-between px-2 ">
              <Icon icon="solar:user-rounded-broken" width="24" height="24" />
              <span>نام و نام خانوادگی</span>
            </label>
            <input
              {...register("fname")}
              className="input"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="email" className="flex justify-between px-2 ">
              <Icon icon="solar:letter-broken" width="24" height="24" />
              <span>ایمیل </span>
            </label>
            <input
              {...register("email", {required: "این فیلد اجباری میباشد", pattern: /^\S+@\S+$/i})}
              className="input"
            />
            {errors.email && (
              <span className="text-xs flex justify-end px-4 text-rose-400">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="password" className="flex justify-between px-2">
              <Icon icon="solar:lock-password-broken" width="24" height="24 " />
              <span>رمز عبور </span>
            </label>
            <input
              className="input"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-xs flex justify-end px-4 text-rose-400">
                ! این فیلد ضروری میباشد
              </span>
            )}
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="fname" className="flex justify-between px-2 ">
              <Icon icon="solar:lock-password-broken" width="24" height="24 " />
              <span> تایید رمز عبور </span>
            </label>
            <input
              {...register("confirmPassword", { required: true })}
              className="input"
            />
            {errors.confirmPassword && (
              <span className="text-xs flex justify-end px-4 text-rose-400">
                ! این فیلد ضروری میباشد
              </span>
            )}
          </div>
          <button className="btn-full" type="submit">
            ثبت نام
          </button>
        </form>
      </div> */}
      <div>
        
      </div>
    </AuthLayout>
  );
}

export default SignUp;
