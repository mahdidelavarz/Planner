function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-[100vh] custom-gradient2 flex items-center justify-center  relative overflow-hidden">
              {/* <img src="../../public/wp5315782.jpg" alt="bg" className="absolute top-0 bottom-0 w-full h-full blur-sm"/>
              <div className="w-full h-full absolute top-0 bottom-0 bg-primary-950 opacity-70"></div> */}
      {children}
    </div>
  );
}

export default AuthLayout;
