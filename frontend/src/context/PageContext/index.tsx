import { createContext, useEffect, useState } from "react";
import { IPageContext, IPageProviderProps } from "./types";
import { PathName } from "../../common/enums";
import { useLocation } from "react-router-dom";

export const PageContext = createContext<IPageContext>({} as IPageContext);

export const PageProvider = ({ children }: IPageProviderProps) => {
  const location = useLocation();
  const [actualPage, setActualPage] = useState<string>("");
  const [pathPage, setPathPage] = useState(location.pathname);
  const [menuSection, setMenuSection] = useState<string>("");

  useEffect(() => {
    Object.keys(PathName).forEach((key: string) => {
      const enumKey = key as keyof typeof PathName;
      if (pathPage.includes(enumKey)) {
        setActualPage(PathName[enumKey]);
        setMenuSection(PathName[enumKey]);
      }
    });
  }, [pathPage]);

  useEffect(() => {
    setPathPage(location.pathname);
  }, [location.pathname]);

  return (
    <PageContext.Provider
      value={{
        actualPage,
        setActualPage,
        pathPage,
        setPathPage,
        menuSection,
        setMenuSection,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};
