/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "../styles/uppy.min.css";
import "plyr-react/plyr.css";
import { ToastContainer } from "react-toastify";

import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import Script from "next/script";
import ProtectedRoute from "./../components/ProtectedRoute/index";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Script src="/uppy/uppy.min.js" strategy="beforeInteractive"></Script>
      <QueryClientProvider client={queryClient}>
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
