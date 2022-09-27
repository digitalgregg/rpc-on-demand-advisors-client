import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import { OutSideClick } from "../../../components/Shared/OutSideClick";
type NavLinksType = {
    title: ReactNode;
    url: string;
};
type SubNavLinksType = {
    title: ReactNode;
    pera: string;
    url: string;
};
const NavList = ({ title, url }: NavLinksType) => {
    const router = useRouter();
    return (
        <li className="p-[10px] cursor-pointer lg:w-fit w-full lg:hover:bg-transparent hover:bg-[#2B2B2B]">
            <Link href={url} className="w-[272px]">
                <a
                    className={` ${
                        router.asPath === url ? "!text-primary !font-bold" : ""
                    } text-[#ffffff] hover:text-primary font-semibold text-[18px] leading-[25px] lg:w-fit w-[272px]`}
                >
                    {title}
                </a>
            </Link>
        </li>
    );
};
const SubNavList = ({ title, url, pera }: SubNavLinksType) => {
    const router = useRouter();
    return (
        <li className=" cursor-pointer hover:rounded lg:hover:bg-[#f8f8f8] hover:bg-[#2B2B2B]">
            <Link href={url}>
                <div
                    className={`${
                        router.asPath === url
                            ? "lg:bg-[#F8F8F8] bg-[#2B2B2B] lg:text-white"
                            : ""
                    }  bg-transparent text-white rounded gap-[5px] py-[8px] px-[16px]`}
                >
                    <span className=" lg:text-lg text-base font-semibold text-white lg:text-[#000805] leading-[24px]">
                        {title}
                    </span>
                    <p className=" text-sm leading-[19px] text-[#676767] font-normal">
                        {pera}
                    </p>
                </div>
            </Link>
        </li>
    );
};

const NavMenuItem = () => {
    const [subMenuState, setSubMenuState] = useState(false);
    const router = useRouter();
    const SubMenuHandlear = () => {
        setSubMenuState(!subMenuState);
    };
    return (
        <nav className="flex flex-col items-start lg:items-center lg:flex-row">
            <ul className=" lg:w-fit w-full flex lg:items-center items-start lg:flex-row flex-col xl:gap-10 gap-[10px]">
                <NavList title={"Home"} url={"/"} />
                <NavList title={"Tour"} url={"/tour"} />
                <li className=" group lg:p-0 p-[10px] lg:w-fit w-full relative">
                    <a onClick={SubMenuHandlear} className="cursor-pointer">
                        <div className=" flex items-center gap-[15.52px]">
                            <span
                                className={`
                        ${
                            router.asPath === "/resources/demo" ||
                            router.asPath === "/contact-us"
                                ? "!text-primary !font-bold"
                                : ""
                        } group-hover:text-primary text-[#ffffff] lg:p-[10px] pr-3 font-semibold text-[18px] leading-[25px]
                        `}
                            >
                                Resources
                            </span>
                            <div
                                className={`${
                                    subMenuState === true
                                        ? "transform rotate-[180deg] w-3"
                                        : "transform rotate-[0deg] w-3"
                                } `}
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
                    </a>
                    <OutSideClick onOutSideClick={() => setSubMenuState(false)}>
                    <ul
                        className={`${
                            subMenuState === false
                                ? "hidden"
                                : " lg:absolute lg:top-10 lg:right-0"
                        } lg:w-[272px] w-full lg:p-[30px] lg:mt-0 mt-3 rounded shadow-sm lg:bg-[#ffffff] flex flex-col gap-[5px]`}
                    >
                        <SubNavList
                            title={"Demo"}
                            pera={
                                "Watch a quick demo or schedule time with us."
                            }
                            url={"/resources/demo"}
                        />
                        <SubNavList
                            title={"Contact Us"}
                            pera={
                                "Watch a quick demo or schedule time with us."
                            }
                            url={"/contact-Us"}
                        />
                    </ul>
                    </OutSideClick>
                </li>
                <NavList title={"Pricing"} url={"/pricing"} />
            </ul>
            <div className="lg:w-fit w-full lg:mt-0 mt-[20vh] lg:flex-none flex gap-5 lg:gap-0 flex-col lg:flex-row">
                <Link href="/signin">
                    <a>
                        <button className=" hover:text-primary lg:w-fit lg:mx-5 w-full py-[11px] px-[19.5px] lg:border-none border-[#F8F8F8] border-solid border-[1px] text-base font-semibold rounded text-[#fff]">
                            Login
                        </button>
                    </a>
                </Link>
                <Link href="/signup">
                    <a>
                        <button className=" hover:bg-primary_dark hover:border-primary_dark border border-solid border-primary lg:w-fit w-full py-[11px] px-[20px] bg-primary text-base font-semibold rounded text-[#fff]">
                            Sign up
                        </button>
                    </a>
                </Link>
            </div>
        </nav>
    );
};

const Header = () => {
    const [dropDownMenu, setDropDownMenu] = useState(false);
    const humBurgerMenu = () => {
        setDropDownMenu(!dropDownMenu);
    };
    return (
        <div className="md:h-[105px] relative h-[70px] flex items-center bg-[#242424]">
            <div className="container mx-auto ">
                <div className="flex items-center justify-between ">
                    <div>
                        <Link href={"/"}>
                            <a>
                                <div className=" w-[198px]">
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
                    </div>
                    {dropDownMenu === false ? (
                        <div
                            onClick={humBurgerMenu}
                            className=" lg:hidden max-w-[24px] cursor-pointer"
                        >
                            <Image
                                width={18}
                                height={16}
                                src="/Images/humburgermenu.svg"
                                alt="icon"
                            />
                        </div>
                    ) : (
                        <div
                            onClick={humBurgerMenu}
                            className=" lg:hidden max-w-[24px] cursor-pointer"
                        >
                            <Image
                                width={24}
                                height={24}
                                src="/Images/humburgermenuClose.svg"
                                alt="icon"
                            />
                        </div>
                    )}

                    <div className="hidden lg:block">
                        <NavMenuItem />
                    </div>
                    <div
                        className={`${
                            dropDownMenu === true ? "block" : "hidden"
                        } z-50 shadow w-full sm:py-[40px] py-5 sm:px-[50px] px-[30px] rounded bg-[#242424] absolute md:top-[100px] top-[68px] right-0 h-fit`}
                    >
                        <NavMenuItem />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
