import React, { ReactNode, useEffect } from "react";
import { getLocal, removeLocal } from "../../utils/localStorage";
import { useRouter } from "next/router";
import { useState } from "react";
import LodingAnimation from "../Shared/LodingAnimation/index";
import ReactGA from "react-ga4";
import { useQuery } from "react-query";
import api from "../../api";
import { useAtom } from "jotai";
import { signupState, team_state, UserPlanState } from "../../state";
import checkRemember from "../../utils/checkRemember";
import { roleUserBlockPath } from "../../utils/pathAuthorize";

type ProtectedRouteProps = {
    children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const token = getLocal("token");
    const router = useRouter();
    const [isLoading, setLoading] = useState<boolean>(false);
    const [teamData] = useAtom(team_state);

    const { data } = useQuery(
        ["fetch-user-plan", teamData],
        () => api.get(`/api/payment/plan/${teamData.id}`),
        { enabled: !!teamData.id, select: (res) => res.data }
    );

    useEffect(() => {
        if (data && getLeftDay(data.plan_end)) {
            if (teamData.role === "user") {
                if (router.asPath.includes("billing/protected")) {
                    return setLoading(true);
                } else {
                    router.replace("/dashboard/billing/protected");
                    return;
                }
            } else {
                if (
                    router.asPath.includes("billing") ||
                    router.asPath.includes("schedule-demo")
                ) {
                    return setLoading(true);
                } else {
                    router.replace("/dashboard/billing/subscription-plan");
                    return;
                }
            }
            return;
        }
        if (
            teamData.role === "user" &&
            roleUserBlockPath.includes(router.asPath)
        ) {
            router.replace("/dashboard/contents");
            return;
        }
        if (
            router.asPath.includes("/f/") ||
            router.asPath.includes("/s/") ||
            router.asPath.includes("/c/")
        ) {
            return setLoading(true);
        }
        if (router.asPath.includes("dashboard") && token) {
            return setLoading(true);
        }
        if (!router.asPath.includes("dashboard") && !token) {
            return setLoading(true);
        }

        router.asPath.includes("dashboard")
            ? !token && router.push("/")
            : token && router.replace("/dashboard/contents");
        router.events.on("routeChangeComplete", () => {
            return setLoading(true);
        });
    }, [router, token, data]);

    return <>{!isLoading ? <LoadingBox /> : children}</>;
};

const LoadingBox = () => (
    <div className="flex items-center justify-center w-full h-screen">
        <LodingAnimation color="#E51937" height={50} width={50} />
    </div>
);

export default ProtectedRoute;

function getLeftDay(plan_end: string) {
    const currentDate = new Date();
    const endDate = new Date(plan_end);
    return endDate.getTime() - currentDate.getTime() <= 0;
}
