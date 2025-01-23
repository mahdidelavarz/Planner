import { BurgerMenuProps } from "../../types/PropsTypes";
function BurgerMenu({ isOpen }: BurgerMenuProps) {
  return (
    <>
     <div className={`w-full h-full bg-primary-400 opacity-50 slowShow absolute top-16  ${isOpen ? "flex" : "hidden"}`}></div>
      {/* <div
        className={`w-[250px] h-96 bg-primary-950  shadow-sm shadow-slate-950 fixed top-16 rounded-l-lg right-0 ${
          isOpen ? "leanerOpenMenu" : "leanerCloseMenu"
        }`}
      ></div> */}
    </>
     
  );
}

export default BurgerMenu;
