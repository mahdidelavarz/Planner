import { BurgerMenuProps } from "../../types/PropsTypes";
function BurgerMenu({ isOpen }: BurgerMenuProps) {
  return (
    // <div
    //   className={`w-full h-full fixed top-0 right-0  mt-[58px]   ${
    //     isOpen ? "flex" : "hidden"
    //   }`}
    // >
    <>
      <div className="w-full bg-primary-900 opacity-50 slowShow"></div>
      <div
        className={`w-[250px] h-96 bg-primary-950  shadow-sm shadow-slate-950 fixed top-16 rounded-l-lg right-0 ${
          isOpen ? "leanerOpenMenu" : "leanerCloseMenu"
        }`}
      ></div>
    </>
    /* </div>
     </div> */
  );
}

export default BurgerMenu;
