import { BurgerMenuProps } from "../../types/PropsTypes";
function BurgerMenu({ isOpen }: BurgerMenuProps) {
  return (
    <div
      className={`w-full h-full fixed top-0 right-0  mt-[58px] leanerLiftMenu ${
        isOpen ? "flex" : "hidden"
      }`}
    >
      <div className="w-[250px] bg-primary-950 shadow-md shadow-black"></div>
      <div className="calc-width bg-primary-900 opacity-50"></div>
    </div>
  );
}

export default BurgerMenu;
