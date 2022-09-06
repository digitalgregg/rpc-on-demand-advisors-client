import React, { useEffect, useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import { Modals } from "../../../modal/ApplicationSettingAddItem";
import Plus from "../../../CustomIcons/PlusIcon";
import Pagination from "../../../Shared/Pagination";
import { applicationsettingsFakeData } from "../../../fake";
import { useQuery } from "react-query";
import api from "../../../../api";
import LodingAnimation from "../../../Shared/LodingAnimation";
import { toast } from "react-toastify";
import { getLocal } from "../../../../utils/localStorage";

const ContentTypes = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [iconColor, setIconColor] = useState(false);
    const teamId = getLocal("team");
    const onOver = (e: any) => {
        if (e) setIconColor(true);
    };
    const onLeave = (e: any) => {
        if (e) setIconColor(false);
    };
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    // Aa4321$2
    const { data, isLoading } = useQuery(["content-item-get"], () =>
        api
            .get(
                `https://oda-center.herokuapp.com/api/application-settings?team_id=${teamId.id}`
            )
            .then((res) => {
                const regionData = res?.data;
                const filterData = regionData.filter(
                    (e: any) => e.type === "content"
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
                HTitle="Funnel Stage"
                closeModal={closeModal}
                modalIsOpen={modalIsOpen}
                modalCloseFuncton={setIsOpen}
                teamId={teamId?.id}
                type={data?.type}
            />
            <div className="h-fit max-w-[770px] md:w-[770px] rounded-lg bg-White overflow-hidden">
                <div className=" px-5 py-[10px] bg-black">
                    <span className="capitalize font-bold leading-[22px] text-base text-White">
                        Content Types
                    </span>
                </div>
                <div className="px-5 md:px-10 pt-5 pb-10 ">
                    {isLoading ? (
                        <LodingAnimation />
                    ) : (
                        <Pagination
                            dataArr={data?.settingsItems}
                            itemsPerPage={5}
                            className=" !justify-start"
                        >
                            {(currentItems) => (
                                <>
                                    {data?.settingsItems === undefined ? (
                                        <>
                                            <p>you have no data</p>
                                        </>
                                    ) : (
                                        <div className=" flex flex-col gap-[16px]">
                                            {currentItems?.map(
                                                ({ title, _id }: any, id) => (
                                                    <ItemCard
                                                        name={title}
                                                        index={id}
                                                        id={_id}
                                                        key={_id}
                                                        orderShow
                                                    />
                                                )
                                            )}
                                        </div>
                                    )}
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

export default ContentTypes;
