import { NavLink } from "react-router-dom";
import { SidebarMenuProps } from "../types/SidebarMenuProps";
import { AnimatePresence, motion } from "framer-motion";
import { Box, IconBox } from "../styles";
import { FiPlus as PlusIcon, FiMinus as MinusIcon } from "react-icons/fi";
import {
  PlusMinusIconContainer,
  SubMenuContainer,
  ToggleContainer,
} from "./styles";
import { ISubRoute } from "../types/LayoutProps";
import { useContext, useEffect, useState } from "react";
import { PageContext } from "../../../context/PageContext";

export function SubRouteContainer({
  showAnimation,
  route,
  isOpen,
  setIsOpen,
}: SidebarMenuProps) {
  const { menuSection, setMenuSection, pathPage } = useContext(PageContext);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  function toggleMenu() {
    setIsSubMenuOpen(!isSubMenuOpen);
    setIsOpen(true);
  }

  useEffect(() => {
    if (!isOpen) {
      setIsSubMenuOpen(false);
    }
  }, [isOpen]);

  return (
    <>
      <ToggleContainer
        onClick={() => {
          toggleMenu();
          setMenuSection(route.name);
        }}
        className={route.name === menuSection ? "link linkSelected" : "link"}
      >
        <Box>
          <IconBox>{route.icon}</IconBox>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="link-text"
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                {route.name}
              </motion.div>
            )}
          </AnimatePresence>
          <PlusMinusIconContainer isMenuOpen={isOpen}>
            {isSubMenuOpen ? <MinusIcon /> : <PlusIcon />}
          </PlusMinusIconContainer>
        </Box>
      </ToggleContainer>

      {isSubMenuOpen && (
        <SubMenuContainer>
          {route.subRoutes?.map((subRoute: ISubRoute) => {
            return (
              <NavLink
                key={subRoute.id}
                className={
                  pathPage.includes(subRoute.path)
                    ? "link linkSelected"
                    : "link linkNotSelected"
                }
                to={subRoute.path}
              >
                <Box>
                  {subRoute.icon && <IconBox>{subRoute.icon}</IconBox>}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        className="link-text"
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                      >
                        {subRoute.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Box>
              </NavLink>
            );
          })}
        </SubMenuContainer>
      )}
    </>
  );
}
