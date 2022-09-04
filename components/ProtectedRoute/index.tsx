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

    const splitRoute = router.pathname.split("/")[1];
    const rootPath = (splitRoute && `/${splitRoute}`) || "/";
    console.log(router.asPath, "as pathname");

    useEffect(() => {
        router.asPath.includes("dashboard")
            ? !token && router.push("/", undefined, { shallow: true })
            : token &&
              router.replace("/dashboard/contents", undefined, {
                  shallow: true,
              });
        setLoading(true);
    }, [token]);

    return <>{!isLoading ? <LoadingBox /> : children}</>;
};

const LoadingBox = () => (
    <div className="flex  justify-center items-center h-screen w-full">
        <LodingAnimation color="#E51937" height={50} width={50} />
    </div>
);

export default ProtectedRoute;
