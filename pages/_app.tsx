import "@/styles/globals.css";
import type { AppContext, AppProps } from "next/app";
import { Layout, ILayoutProps } from "@/components/Layout";
import code from "@/public/code.png";

const App = (data: AppProps & ILayoutProps) => {
  const { Component, pageProps, navbarData, footerData } = data;
  return (
    <Layout navbarData={navbarData} footerData={footerData}>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
