import { ReactNode } from "react";

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
export type accordionProps = {
  title: string;
  children: React.ReactNode;
  icon: ReactNode;
  qty: string;
  color: string;
};
