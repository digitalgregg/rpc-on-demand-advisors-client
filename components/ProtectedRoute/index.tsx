import React, { ReactNode, useEffect } from "react";
import { getLocal } from "../../utils/localStorage";
import {useRouter} from "next/router";

type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const token = getLocal("token");
    const router = useRouter();

  const splitRoute = router.pathname.split("/")[1];
  const rootPath = (splitRoute && `/${splitRoute}`) || "/";
  console.log(router.asPath, "as pathname")
  
  useEffect(() => {
    router.asPath.includes("dashboard")
    ? !token && router.push("/")
    : token && router.push("/dashboard/contents");
  },[token]) 


  return <>{children}</>;
};

export default ProtectedRoute;