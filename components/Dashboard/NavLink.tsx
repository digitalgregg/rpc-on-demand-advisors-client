import { useRouter } from "next/router";
import Link from "next/link";
import PropTypes from "prop-types";
import { ReactNode } from "react";

type NavLinkType = {
    href: string;
    exact: boolean;
    children: ReactNode;
    activeClassName: string;
    className: string;
};

NavLink.defaultProps = {
    exact: false,
    activeClassName: "",
    className: "",
};

function NavLink({
    href,
    exact,
    children,
    activeClassName,
    ...props
}: NavLinkType) {
    const { asPath } = useRouter();
    const isActive = exact ? asPath === href : asPath.startsWith(href);

    if (isActive) {
        props.className += " active" + " " + activeClassName;
    }

    return (
        <Link href={href}>
            <a {...props}>{children}</a>
        </Link>
    );
}

export default NavLink;
