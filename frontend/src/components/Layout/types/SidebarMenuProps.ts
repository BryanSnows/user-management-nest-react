import { Variant } from "framer-motion";
import { IRoute } from "./LayoutProps";

export type SidebarMenuProps = {
  showAnimation: { [key: string]: Variant };
  route: IRoute;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  // isSubMenuOpen: boolean;
  // setIsSubMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
