import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

const subNev = [
    {
        titile: "Application Settings",
        url: "/account-settings/application-settings",
    },
    {
        titile: "User Management",
        url: "/account-settings/user-management",
    },
    {
        titile: "Branding",
        url: "/account-settings/branding",
    },
    {
        titile: "Import",
        url: "/account-settings/import",
    },
    {
        titile: "Trackers",
        url: "/account-settings/trackers",
    },
    {
        titile: "Notification",
        url: "/account-settings/notification",
    },
];

export const Layout = ({ children }: { children: ReactNode }) => {
    const router = useRouter();
    return (
        <div className=" py-[30px]">
            <div className=" mb-[30px]">
                <ul className=" flex flex-row flex-wrap gap-[15px]">
                    {subNev.map((val: any, i) => (
                        <li
                            className=" cursor-pointer w-fit mb-[10px] md:mb-0"
                            key={i}
                        >
                            <Link href={val.url}>
                                <a
                                    className={`${
                                        router.asPath === val.url
                                            ? "!bg-primary !font-bold border-primary text-White"
                                            : "border-[#9E9E9E]"
                                    }   py-2 px-[20px] border border-solid rounded hover:bg-primary hover:text-White hover:border-primary`}
                                >
                                    {val.titile}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div>{children}</div>
        </div>
    );
};
