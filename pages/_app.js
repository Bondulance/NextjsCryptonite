/* eslint-disable quotes */
/* eslint-disable import/no-extraneous-dependencies */

import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Script from "next/script";
import { Navbar, Footer } from "../components";

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <div className="dark:bg-nft-dark bg-white min-h-screen">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>

    <Script
      src="https://kit.fontawesome.com/9382c5d8c4.js"
      crossOrigin="anonymous"
    />
  </ThemeProvider>
);
export default MyApp;
