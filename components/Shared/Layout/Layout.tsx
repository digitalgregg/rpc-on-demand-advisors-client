import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
type DefaultLayout = {
    children: ReactNode;
};
const Layout = ({ children }: DefaultLayout) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
