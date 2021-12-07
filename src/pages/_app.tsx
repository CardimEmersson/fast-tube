import type { AppProps } from "next/app";
import GlobalStyles from "../styles/global";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "contexts/AuthContext";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const progress = new ProgressBar({
  size: 2,
  color: "#1DB954",
  className: "bar-of-progress",
  delay: 100,
});

Router.events.on("routeChangeStart", () => progress.start());
Router.events.on("routeChangeComplete", () => progress.finish());
Router.events.on("routeChangeError", () => progress.finish());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
      <ToastContainer />
    </>
  );
}

export default MyApp;
