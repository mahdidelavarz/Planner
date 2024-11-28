function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-[100vh] bg-gradient-to-br from-[#22222E] to-[#26222e]">
      {children}
    </div>
  );
}

export default AuthLayout;
