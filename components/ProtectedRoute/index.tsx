import React, { ReactNode, useEffect } from "react";
import { getLocal } from "../../utils/localStorage";
import {useRouter} from "next/router";
import { allUnauthorizePath, authorizePath } from './../UnauthorizePaths/index';

type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const token = getLocal("token");
    const router = useRouter();

  const splitRoute = router.pathname.split("/")[1];
  const rootPath = (splitRoute && `/${splitRoute}`) || "/";
  
  useEffect(() => {
    const pathRedirect = allUnauthorizePath.includes(router.pathname) ? router.pathname : "/";
    const authorizePathRedirect = authorizePath.includes(router.pathname) ? router.pathname : "/dashboard/contents";
  if(!token) {
    router.replace(pathRedirect);
    return
  }
  if(token) {
    router.replace(authorizePathRedirect);
    return
  }
  },[]) 


  return <>{children}</>;
};

export default ProtectedRoute;
