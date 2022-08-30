import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

const subNev = [
    {
        titile: "Application Settings",
        url: "/dashboard/account-settings/application-settings",
    },
    {
        titile: "User Management",
        url: "/dashboard/account-settings/user-management",
    },
    {
        titile: "Branding",
        url: "/dashboard/account-settings/branding",
    },
    {
        titile: "Import",
        url: "/dashboard/account-settings/import",
    },
    {
        titile: "Trackers",
        url: "/dashboard/account-settings/trackers",
    },
    {
        titile: "Notification",
        url: "/dashboard/account-settings/notifications",
    },
];

export const Layout = ({ children }: { children: ReactNode }) => {
    const router = useRouter();
    return (
        <div className=" py-[30px]">
            <div className=" mb-[30px]">
                <ul className=" flex flex-row flex-wrap gap-[15px] gap-y-[30px] xl:gap-y-0">
                    {subNev.map((val: any, i) => (
                        <li
                            className="cursor-pointer w-fit"
                            key={i}
                        >
                            <Link href={val.url}>
                                <a
                                    className={`${
                                        router.asPath === val.url
                                            ? "!bg-primary !font-bold border-primary text-White"
                                            : "border-[#9E9E9E]"
                                    }   py-2 px-[19px] border border-solid rounded transition ease-in-out duration-200 hover:bg-primary hover:text-White hover:border-primary`}
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
