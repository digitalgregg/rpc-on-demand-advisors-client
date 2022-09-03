import React, { ReactNode, useEffect } from "react";
import { getLocal } from "../../utils/localStorage";
import { useRouter } from "next/router";
import { allUnauthorizePath } from './../UnauthorizePaths/index';

type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    
    const router = useRouter();
    const pathName= router.pathname ;
    const token = getLocal("token");
    const user = getLocal("user");
    useEffect(() => {
    
      const unauthorisePath = allUnauthorizePath.includes(router.pathname);
    if ((!token || !user ) && unauthorisePath === false ) {
        router.push("/");
    }
    if(token) {
        router.replace("/dashboard/contents");
    }
  }, [token])

  return <>{children}</>;
};

export default ProtectedRoute;
