import React, { ReactNode, useEffect } from "react";
import { getLocal } from "../../utils/localStorage";
import { useRouter } from "next/router";
import { useState } from "react";
import LodingAnimation from "../Shared/LodingAnimation/index";
import ReactGA from "react-ga4";
import { useQuery } from "react-query";
import api from "../../api";

type ProtectedRouteProps = {
    children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const token = getLocal("token");
    const router = useRouter();
    const [isLoading, setLoading] = useState<boolean>(false);
    const user = getLocal("user-info");
    const { isLoading: billLoading, data } = useQuery(
        ["billing-info-get", user?._id],
        () =>
            api.get(
                `${process.env.NEXT_PUBLIC_BASE_URL}/api/billing-record/${user?._id}`
            ),
        { enabled: !!user?._id }
    );
    const currentPlan = data?.data[0];
    const expireDate = currentPlan?.expire_date;

    const date1 = new Date();
    const date2 = new Date(expireDate);
    const Difference_In_Time = date2.getTime() - date1.getTime();
    const Difference_In_Days = Math.floor(
        Difference_In_Time / (1000 * 3600 * 24)
    );

    useEffect(() => {
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
    }, [router, token]);

    return <>{!isLoading ? <LoadingBox /> : children}</>;
};

const LoadingBox = () => (
    <div className="flex items-center justify-center w-full h-screen">
        <LodingAnimation color="#E51937" height={50} width={50} />
    </div>
);

export default ProtectedRoute;
