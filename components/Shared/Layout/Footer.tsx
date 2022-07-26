import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsLetter from "../JoinNewsLetter/NewsLetter";

type NavLinksType = {
    title: ReactNode;
    url: string;
};

const FooterMenuOne: NavLinksType[] = [
    {
        title: "Highspot alternative",
        url: "/highspotAlternative",
    },
    {
        title: "Showpad alternative",
        url: "/showpad-alternative",
    },
    {
        title: "Uberflip pricing",
        url: "/uberflip-pricing",
    },
    {
        title: "Seismic alternative",
        url: "/seismic-alternative",
    },
    {
        title: "PathFactory alternative",
        url: "/pathFactory-alternative",
    },
    {
        title: "Paperflite competitor",
        url: "/paperflite-competitor",
    },
    {
        title: "Top Sales Enablement Tools",
        url: "/top-sales-enablement-tools",
    },
    {
        title: "How to do a sales content audit",
        url: "/how-to-doa-sales-content-audit",
    },
];
const FooterMenuTwo: NavLinksType[] = [
    {
        title: "Tour",
        url: "/tour",
    },
    {
        title: "Demo",
        url: "resources/demo",
    },
    {
        title: "Resources",
        url: "/resources",
    },
    {
        title: "Pricing",
        url: "/pricing",
    },
    {
        title: "Help Center",
        url: "/help-center",
    },
    {
        title: "Get started",
        url: "/",
    },
];
const FooterMenuThree: NavLinksType[] = [
    {
        title: "About",
        url: "/about",
    },
    {
        title: "Careers",
        url: "/careers",
    },
    {
        title: "Contact Us",
        url: "/contact-us",
    },
    {
        title: "Support",
        url: "/dashboard/support",
    },
    {
        title: "Privacy Policy",
        url: "/privacy-policy",
    },
    {
        title: "Terms of Service",
        url: "/terms-service",
    },
];

const FooterIcon = () => {
    const URL = `${process.env.NEXT_PUBLIC_MAILCHIMP_URL}`;
    return (
        <>
            <Link href={"/"}>
                <a>
                    <div className="w-[228px]">
                        <Image
                            layout="responsive"
                            width={198}
                            height={31}
                            src="/header-logo.svg"
                            alt="icon"
                        />
                    </div>
                </a>
            </Link>
            {/* Join our newsletter  */}
            <MailchimpSubscribe
                url={URL}
                render={(props) => {
                    const { subscribe, status, message } = props || {};
                    return (
                        <NewsLetter
                            status={status}
                            message={message}
                            onValidated={(formData: any) => subscribe(formData)}
                        />
                    );
                }}
            />
        </>
    );
};

const Footer = () => {
    const [dropDownMenuOne, setDropDownMenuOne] = useState(false);
    const [dropDownMenuTwo, setDropDownMenuTwo] = useState(false);
    const [dropDownMenuThree, setDropDownMenuThree] = useState(false);
    const router = useRouter();
    const dropDownMenuHandler = (index: number) => {
        if (index === 1) {
            setDropDownMenuOne(!dropDownMenuOne);
            setDropDownMenuTwo(false);
            setDropDownMenuThree(false);
        }
        if (index === 2) {
            setDropDownMenuTwo(!dropDownMenuTwo);
            setDropDownMenuThree(false);
            setDropDownMenuOne(false);
        }
        if (index === 3) {
            setDropDownMenuThree(!dropDownMenuThree);
            setDropDownMenuTwo(false);
            setDropDownMenuOne(false);
        }
    };
    const footerMenuHeader =
        "text-[18px] leading-[25px] font-semibold lg:text-[24px] lg:leading-[33px] text-[#ffffff]";
    return (
        <div className=" bg-[#191919] text-white py-[80px]">
            <div className="container mx-auto ">
                <div className="flex flex-col items-start justify-between lg:flex-row">
                    <div className=" lg:hidden">
                        <FooterIcon />
                    </div>
                    <div className="w-full lg:gap-0 gap-[23px] flex items-start lg:flex-row flex-col justify-between">
                        <div className="hidden lg:block">
                            <FooterIcon />
                        </div>
                        <div className="flex flex-col w-full gap-3 lg:gap-6 lg:w-fit">
                            <div
                                onClick={() => dropDownMenuHandler(1)}
                                className="flex flex-row items-center justify-between w-full lg:w-fit"
                            >
                                <label className={`${footerMenuHeader}`}>
                                    Sales Enablement
                                </label>
                                <div
                                    className={`${
                                        dropDownMenuOne === true
                                            ? "transform rotate-[180deg] w-3"
                                            : "transform rotate-[0deg] w-3"
                                    } lg:hidden `}
                                >
                                    <Image
                                        layout="responsive"
                                        width={18}
                                        height={10}
                                        src="/assets/resurces-demo/darrow.svg"
                                        alt="icon"
                                    />
                                </div>
                            </div>
                            <hr className=" lg:hidden bg-[#ffffff] opacity-25" />
                            <div
                                className={`${
                                    dropDownMenuOne === true
                                        ? "block"
                                        : "hidden"
                                } lg:block`}
                            >
                                <ul className="flex flex-col gap-4">
                                    {FooterMenuOne.map((FooterItem, i) => (
                                        <li key={i}>
                                            <Link href={`${FooterItem.url}`}>
                                                <a
                                                    className={`${
                                                        router.asPath ===
                                                        FooterItem.url
                                                            ? "text-[#f0f0f0] font-medium"
                                                            : "text-[#DEDEDE] font-normal"
                                                    } text-base  leading-[22px] `}
                                                >
                                                    {FooterItem.title}
                                                </a>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col w-full gap-3 lg:gap-6 lg:w-fit">
                            <div
                                onClick={() => dropDownMenuHandler(2)}
                                className="flex flex-row items-center justify-between w-full lg:w-fit"
                            >
                                <label className={`${footerMenuHeader}`}>
                                    Product
                                </label>
                                <div
                                    className={`${
                                        dropDownMenuTwo === true
                                            ? "transform rotate-[180deg] w-3"
                                            : "transform rotate-[0deg] w-3"
                                    } lg:hidden  `}
                                >
                                    <Image
                                        layout="responsive"
                                        width={18}
                                        height={10}
                                        src="/assets/resurces-demo/darrow.svg"
                                        alt="icon"
                                    />
                                </div>
                            </div>
                            <hr className=" lg:hidden bg-[#ffffff] opacity-25" />
                            <div
                                className={`${
                                    dropDownMenuTwo === true
                                        ? "block"
                                        : "hidden"
                                } lg:block`}
                            >
                                <ul className="flex flex-col gap-4">
                                    {FooterMenuTwo.map((FooterItem, i) => (
                                        <li key={i}>
                                            <Link href={`${FooterItem.url}`}>
                                                <a
                                                    className={`${
                                                        router.asPath ===
                                                        FooterItem.url
                                                            ? "text-[#f0f0f0] font-medium"
                                                            : "text-[#DEDEDE] font-normal"
                                                    } text-base  leading-[22px] `}
                                                >
                                                    {FooterItem.title}
                                                </a>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col w-full gap-3 lg:gap-6 lg:w-fit">
                            <div
                                onClick={() => dropDownMenuHandler(3)}
                                className="flex flex-row items-center justify-between w-full lg:w-fit"
                            >
                                <label className={`${footerMenuHeader}`}>
                                    Company
                                </label>
                                <div
                                    className={`${
                                        dropDownMenuThree === true
                                            ? "transform rotate-[180deg] w-3"
                                            : "transform rotate-[0deg] w-3"
                                    } lg:hidden `}
                                >
                                    <Image
                                        layout="responsive"
                                        width={18}
                                        height={10}
                                        src="/assets/resurces-demo/darrow.svg"
                                        alt="icon"
                                    />
                                </div>
                            </div>
                            <hr className=" lg:hidden bg-[#ffffff] opacity-25" />
                            <div
                                className={`${
                                    dropDownMenuThree === true
                                        ? "block"
                                        : "hidden"
                                } lg:block`}
                            >
                                <ul className="flex flex-col gap-4">
                                    {FooterMenuThree.map((FooterItem, i) => (
                                        <li key={i}>
                                            <Link href={`${FooterItem.url}`}>
                                                <a
                                                    className={`${
                                                        router.asPath ===
                                                        FooterItem.url
                                                            ? "text-[#f0f0f0] font-medium"
                                                            : "text-[#DEDEDE] font-normal"
                                                    } text-base  leading-[22px] `}
                                                >
                                                    {FooterItem.title}
                                                </a>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <hr className="my-[40px] bg-[#ffffff] opacity-25 hidden lg:block " />
                    <div className="mt-[40px] lg:mt-0">
                        <p className="text-center ">
                            © 2022 ODA Center, Inc., All rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
