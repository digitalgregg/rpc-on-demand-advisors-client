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
import { useEffect } from "react";
import api from "../api";
import { useAtom } from "jotai";
import { signupState, team_state } from "../state";

const queryClient = new QueryClient();

// const TRACKING_ID = process.env.NEXT_PUBLIC_TRACKING_ID || "G-7EYBQXXLGR";
// ReactGA.initialize(TRACKING_ID);

function MyApp({ Component, pageProps }: AppProps) {
    const [teamData, setTeamObj] = useAtom(team_state);
    useEffect(() => {
        (async function () {
            try {
                const teamResponse = await api.get(
                    `/api/team/user/${teamData.user_id}`
                );
                const teamObj = resultToObj(teamResponse.data);
                setTeamObj(teamObj);
            } catch (error) {
                console.log(error);
            }
        })();

        return () => {};
    }, []);

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

function resultToObj(result: any) {
    return {
        name: result.team_id.team_name,
        email: result.user_id.email,
        company_name: result.team_id.company_name,
        id: result.team_id._id,
        user_id: result.user_id._id,
        team_name: result.team_id.team_name,
        role: result.role,
    };
}

export default MyApp;
