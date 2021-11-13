import type { AppProps } from "next/app";
import GlobalStyles from "../styles/global";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "contexts/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

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
