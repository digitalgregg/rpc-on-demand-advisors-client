/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "../styles/uppy.min.css";
import "plyr-react/plyr.css";
import { ToastContainer } from "react-toastify";
import ReactGA from "react-ga4";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import Script from "next/script";
import ProtectedRoute from "./../components/ProtectedRoute/index";
import "../styles/rsuite.css";
import { getLocal } from "../utils/localStorage";

const queryClient = new QueryClient();

const TRACKING_ID = process.env.NEXT_PUBLIC_TRACKING_ID || "G-7EYBQXXLGR";
ReactGA.initialize(TRACKING_ID);

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
            <Script
                src="/uppy/uppy.min.js"
                strategy="beforeInteractive"
            ></Script>
            <QueryClientProvider client={queryClient}>
                <ProtectedRoute>
                    <Component {...pageProps} />
                </ProtectedRoute>
            </QueryClientProvider>
        </>
    );
}

export default MyApp;
