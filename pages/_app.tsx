/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "../styles/uppy.min.css";
import "plyr-react/plyr.css";
import "react-loading-skeleton/dist/skeleton.css";
import { ToastContainer } from "react-toastify";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import Script from "next/script";
import ProtectedRoute from "./../components/ProtectedRoute/index";
import "../styles/rsuite.css";
import { useEffect } from "react";
import api from "../api";
import { useAtom } from "jotai";
import { team_state, UpgradeModalState } from "../state";
import GlobalContextProvider from "../components/Context/GlobalContextProvider";
import UpgradeModal from "../components/modal/UpgradeModal";
import checkRemember from "../utils/checkRemember";
import { useRouter } from "next/router";
import { removeLocal } from "../utils/localStorage";

const queryClient = new QueryClient();

// const TRACKING_ID = process.env.NEXT_PUBLIC_TRACKING_ID || "G-7EYBQXXLGR";
// ReactGA.initialize(TRACKING_ID);

function MyApp({ Component, pageProps }: AppProps) {
    const [teamData, setTeamObj] = useAtom(team_state);
    const [upgradeModal, setUpgradeModal] = useAtom(UpgradeModalState);
    const router = useRouter();

    useEffect(() => {
        if (checkRemember()) {
            removeLocal("user");
            removeLocal("user-info");
            removeLocal("team");
            removeLocal("token");
            removeLocal("payment-method");
            removeLocal("user-plan-limit");
            removeLocal("remember");
            router.replace("/");
        }
        (async function () {
            try {
                if (teamData.user_id) {
                    const teamResponse = await api.get(
                        `/api/team/user/${teamData.user_id}`
                    );
                    const teamObj = resultToObj(teamResponse.data);
                    setTeamObj(teamObj);
                }
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
                    <GlobalContextProvider>
                        <Component {...pageProps} />
                    </GlobalContextProvider>
                </ProtectedRoute>
            </QueryClientProvider>
            <UpgradeModal
                modalOpen={!!upgradeModal}
                handleModal={() => setUpgradeModal("")}
            />
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
        customer: "",
    };
}

export default MyApp;
