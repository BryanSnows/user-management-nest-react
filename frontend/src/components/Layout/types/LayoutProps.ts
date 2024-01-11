export type LayoutProps = {
  children: JSX.Element;
};

export interface IRoute {
  path?: string;
  transactions?: number[];
  name: string;
  icon: JSX.Element;
  id: string;
  subRoutes?: ISubRoute[];
}

export interface ISubRoute {
  path: string;
  transactions?: number[];
  name: string;
  icon: JSX.Element | string;
  id: string;
}
