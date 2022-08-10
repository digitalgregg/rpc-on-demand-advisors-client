import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useState } from "react";

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
        url: "/showpadAlternative",
    },
    {
        title: "Uberflip pricing",
        url: "/uberflipPricing",
    },
    {
        title: "Seismic alternative",
        url: "/seismicAlternative",
    },
    {
        title: "PathFactory alternative",
        url: "/pathFactoryAlternative",
    },
    {
        title: "Paperflite competitor",
        url: "/paperfliteCompetitor",
    },
    {
        title: "Top Sales Enablement Tools",
        url: "/topSalesEnablementTools",
    },
    {
        title: "How to do a sales content audit",
        url: "/howToDoaSalesContentAudit",
    },
];
const FooterMenuTwo: NavLinksType[] = [
    {
        title: "Tour",
        url: "/tour",
    },
    {
        title: "Demo",
        url: "/demo",
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
        url: "/helpCenter",
    },
    {
        title: "Get started",
        url: "/getStarted",
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
        url: "/contactUs",
    },
    {
        title: "Support",
        url: "/support",
    },
    {
        title: "Privacy Policy",
        url: "/privacyPolicy",
    },
    {
        title: "Terms of Service",
        url: "/termsService",
    },
];
const FooterIcon = () => {
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
            <div className="lg:mb-0 mb-[23px]">
                <div className="mt-[30px] mb-[16.3px]">
                    <span className=" text-[#ffffff] text-base leading-[22px]">
                        Join our newsletter
                    </span>
                </div>

                <div className=" bg-[#ffffff] rounded pl-[10px] py-[3px] pr-[3px]">
                    <input
                        className=" bg-transparent border-none outline-none text-[#676767]"
                        type="text"
                        placeholder="Youremail@gmail.com"
                    />
                    <button className=" ml-[3px] text-[#ffffff] text-sm leading-[19px] py-[10px] px-[11px] hover:bg-[#e51938e5] bg-[#e51937] rounded">
                        Subscribe
                    </button>
                </div>
            </div>
        </>
    );
};

const Footer = () => {
    const [dropDownMenuOne, setDropDownMenuOne] = useState(false);
    const [dropDownMenuTwo, setDropDownMenuTwo] = useState(false);
    const [dropDownMenuThree, setDropDownMenuThree] = useState(false);
    const router = useRouter();
    const dropDownMenuHandler = (index:number) => {
        if(index === 1){
            setDropDownMenuOne(!dropDownMenuOne);
            setDropDownMenuTwo(false);
            setDropDownMenuThree(false);
        } 
        if(index === 2){
            setDropDownMenuTwo(!dropDownMenuTwo);
            setDropDownMenuThree(false);
            setDropDownMenuOne(false);
        } 
        if(index === 3){
            setDropDownMenuThree(!dropDownMenuThree);
            setDropDownMenuTwo(false);
            setDropDownMenuOne(false);
        } 
    };
    return (
        <div className=" bg-[#191919] text-white py-[80px]">
            <div className="container mx-auto ">
                <div className=" flex justify-between lg:flex-row flex-col items-start">
                    <div className=" lg:hidden">
                        <FooterIcon />
                    </div>
                    <div className="w-full lg:gap-0 gap-[23px] flex items-start lg:flex-row flex-col justify-between">
                        <div className="lg:block hidden">
                            <FooterIcon />
                        </div>
                        <div className="flex flex-col lg:gap-6 gap-3 lg:w-fit w-full">
                            <div
                               onClick={()=> dropDownMenuHandler(1)}
                                className=" lg:w-fit w-full flex justify-between items-center flex-row"
                            >
                                <label className=" text-2xl font-semibold leading-[33px] text-[#ffffff]">
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
                                        src="/Images/darrow.svg"
                                        alt="icon"
                                    />
                                </div>
                            </div>
                            <hr className=" lg:hidden bg-[#ffffff] opacity-25" />
                            <div
                                className={`${
                                    dropDownMenuOne === true ? "block" : "hidden"
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
                        <div className="flex flex-col lg:gap-6 gap-3 lg:w-fit w-full">
                            <div
                                onClick={()=> dropDownMenuHandler(2)}
                                className=" lg:w-fit w-full flex justify-between items-center flex-row"
                            >
                                <label className=" text-2xl font-semibold leading-[33px] text-[#ffffff]">
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
                                        src="/Images/darrow.svg"
                                        alt="icon"
                                    />
                                </div>
                            </div>
                            <hr className=" lg:hidden bg-[#ffffff] opacity-25" />
                            <div
                                className={`${
                                    dropDownMenuTwo === true ? "block" : "hidden"
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
                        <div className="flex flex-col lg:gap-6 gap-3 lg:w-fit w-full">
                            <div
                                onClick={()=> dropDownMenuHandler(3)}
                                className=" lg:w-fit w-full flex justify-between items-center flex-row"
                            >
                                <label className=" text-2xl font-semibold leading-[33px] text-[#ffffff]">
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
                                        src="/Images/darrow.svg"
                                        alt="icon"
                                    />
                                </div>
                            </div>
                            <hr className=" lg:hidden bg-[#ffffff] opacity-25" />
                            <div
                                className={`${
                                    dropDownMenuThree === true ? "block" : "hidden"
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
            </div>
        </div>
    );
};

export default Footer;
