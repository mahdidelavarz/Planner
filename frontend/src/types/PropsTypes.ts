export type BurgerMenuProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type AppLayoutProps = {
  title: string;
  children: React.ReactNode;
};
export type DashboardLayoutProps = {
  children: React.ReactNode;
};
