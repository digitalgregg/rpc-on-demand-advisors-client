import React, { useState, useEffect } from "react";
import ItemCard from "../ItemCard/ItemCard";
import { Modals } from "../../../modal/ApplicationSettingAddItem";
import Plus from "../../../CustomIcons/PlusIcon";
import ToggleButton from "../../../Shared/ToggleButton";
import Pagination, { IsArray } from "../../../Shared/Pagination";
import { applicationsettingsFakeData } from "../../../fake";
import { getLocal, setLocal } from "../../../../utils/localStorage";
import { useQuery } from "react-query";
import api from "../../../../api";
import LodingAnimation from "./../../../Shared/LodingAnimation/index";
import { toast } from "react-toastify";
const Industry = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [iconColor, setIconColor] = useState(false);
    const teamId = getLocal("team");
    const productToggle = getLocal("industry-toggle");
    const onOver = (e: any) => {
        if (e) setIconColor(true);
    };
    const onLeave = (e: any) => {
        if (e) setIconColor(false);
    };
    const handleToggle = () => setToggle(!toggle);

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }
    useEffect(() => {
        if (toggle === false) {
            setLocal("industry-toggle", "false");
        } else if (toggle === true) {
            setLocal("industry-toggle", "true");
        }
    }, [toggle]);
    useEffect(() => {
        setToggle(productToggle);
        setLocal("industry-toggle", productToggle);
    }, []);

    const { data, isLoading } = useQuery(["industry-item-get"], () =>
        api
            .get(
                `https://oda-center.herokuapp.com/api/application-settings?team_id=${teamId?.id}`
            )
            .then((res) => {
                const regionData = res?.data;
                const filterData = regionData?.filter(
                    (e: any) => e?.type === "industry"
                )[0];

                return filterData;
            })
            .catch((res) => {
                toast.error(res.message);
            })
    );

    return (
        <>
            <Modals
                modalCloseFuncton={setModalIsOpen}
                HTitle="Industry"
                modalIsOpen={modalIsOpen}
                teamId={teamId?.id}
                type={data?.type}
            />
            <div className="h-fit max-w-[770px] md:w-[770px] rounded-lg bg-White overflow-hidden">
                <div className=" px-5 md:px-10 py-5 ">
                    <div className=" flex flex-row justify-between py-[10px]">
                        <span className="capitalize font-bold leading-[22px] text-base text-[#101010]">
                            Industry
                        </span>
                        <ToggleButton
                            toggle={toggle}
                            handleToggle={handleToggle}
                            className={`
                                ${
                                    toggle === true
                                        ? " bg-primary"
                                        : "bg-[#DEDEDE]"
                                } before:bg-White before:shadow-[0px_2px_4px_rgba(0,0,0,0.25)]
                            `}
                        />
                    </div>
                    <hr className=" text-[#9E9E9E] mb-[16px]" />
                    {isLoading ? (
                        <LodingAnimation />
                    ) : (
                        <Pagination
                            dataArr={IsArray(data?.settingsItems)}
                            itemsPerPage={5}
                            className=" !justify-start"
                        >
                            {(currentItems) => (
                                <>
                                    <div className=" flex flex-col gap-[16px]">
                                        {currentItems?.map(
                                            ({ title, _id }: any) => (
                                                <ItemCard
                                                    name={title}
                                                    key={_id}
                                                    id={_id}
                                                />
                                            )
                                        )}
                                    </div>
                                    <div
                                        onClick={openModal}
                                        onMouseOver={onOver}
                                        onMouseLeave={onLeave}
                                        className=" group  my-[16px] w-[159px] h-[45px] py-[10px] px-[10px] rounded border-[1px] border-solid border-[#9E9E9E] hover:border-primary capitalize text-base leading-[22px] font-semibold  flex flex-row  items-center gap-[10px] cursor-pointer hover-transition hover:bg-primary"
                                    >
                                        <Plus
                                            color={`${
                                                iconColor === true
                                                    ? "#ffffff"
                                                    : "#000000"
                                            }`}
                                        />
                                        <span className="text-[#000000] group-hover:text-White ">
                                            Add Stage
                                        </span>
                                    </div>
                                </>
                            )}
                        </Pagination>
                    )}
                </div>
            </div>
        </>
    );
};

export default Industry;
