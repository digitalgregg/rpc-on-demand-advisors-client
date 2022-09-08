import React, { ReactNode, useEffect } from "react";
import { getLocal } from "../../utils/localStorage";
import { useRouter } from "next/router";
import { useState } from "react";
import LodingAnimation from "../Shared/LodingAnimation/index";

type ProtectedRouteProps = {
    children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const token = getLocal("token");
    const router = useRouter();
    const [isLoading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (router.asPath.includes("dashboard") && token) {
            setLoading(true);
        }
        if (!router.asPath.includes("dashboard") && !token) {
            setLoading(true);
        }
        router.asPath.includes("dashboard")
            ? !token && router.push("/")
            : token && router.replace("/dashboard/contents");
        router.events.on("routeChangeComplete", () => {
            setLoading(true);
        });
    }, [token]);

    return <>{!isLoading ? <LoadingBox /> : children}</>;
};

const LoadingBox = () => (
    <div className="flex items-center justify-center w-full h-screen">
        <LodingAnimation color="#E51937" height={50} width={50} />
    </div>
);

export default ProtectedRoute;