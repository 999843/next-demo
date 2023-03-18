// ./components/layout/index.tsx
import { FC } from "react";
import styles from "./styles.module.scss";
import { INavBarProps, NavBar } from "../NavBar";
import { Footer, IFooterProps } from "../Footer";

export interface ILayoutProps {
  navbarData: INavBarProps;
  footerData: IFooterProps;
}

export const Layout: FC<ILayoutProps & { children: JSX.Element }> = ({
  navbarData,
  footerData,
  children,
}) => {
  return (
    <div className={styles.layout}>
      <NavBar {...navbarData} />
      <main className={styles.main}>{children}</main>
      <Footer {...footerData} />
    </div>
  );
};
