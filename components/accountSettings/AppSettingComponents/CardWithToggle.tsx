import React from "react";
import ToggleButton from "../../Shared/ToggleButton";
import { useState } from "react";
import { ReactNode } from "react";
import { useAtom } from "jotai";
import { AppSettingToggle } from "../../../state";

function CardWithToggle({
    header,
    children,
}: {
    header: string;
    children?: ReactNode;
}) {
    const [appSetting, setAppSetting]: any = useAtom(AppSettingToggle);
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <div className="h-fit w-full rounded-lg bg-White overflow-hidden">
            <div className="px-5 sm:px-[30px] pb-[30px]  md:px-10 lg:px-5 xl:px-10 ">
                <div className=" flex flex-row justify-between py-[12px] pt-5">
                    <span className="capitalize font-bold leading-[22px] text-base text-[#101010]">
                        {header}
                    </span>
                    <ToggleButton
                        toggle={appSetting[header.toLowerCase()]}
                        handleToggle={() => {
                            setAppSetting({
                                ...appSetting,
                                [header.toLowerCase()]:
                                    !appSetting[header.toLowerCase()],
                            });
                        }}
                        className={`
                    ${
                        appSetting[header.toLowerCase()] === true
                            ? " bg-primary"
                            : "bg-[#DEDEDE]"
                    } before:bg-White before:shadow-[0px_2px_4px_rgba(0,0,0,0.25)]
                `}
                    />
                </div>
                <hr className=" text-[#9E9E9E] " />
                <div className="pt-5">{children}</div>
            </div>
        </div>
    );
}

export default CardWithToggle;
