import React, { useState, useEffect } from "react";
import ItemCard from "../ItemCard/ItemCard";
import { Modals } from "../../../modal/ApplicationSettingAddItem";
import Plus from "../../../CustomIcons/PlusIcon";
import ToggleButton from "../../../Shared/ToggleButton";
import Pagination from "../../../Shared/Pagination";
import { setLocal } from "../../../../utils/localStorage";
import { getLocal } from "./../../../../utils/localStorage";
import { useQuery } from "react-query";
import api from "../../../../api";
import LodingAnimation from "../../../Shared/LodingAnimation";
import { toast } from "react-toastify";

const Product = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [iconColor, setIconColor] = useState(false);
    const [getData, setGetData] = useState([]);
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
    const handleToggle = () => setToggle(!toggle);

    const localSt = getLocal("product-toggle");
    // console.log(localSt, "local storage")

    useEffect(() => {
        setLocal("product-toggle", toggle);
    }, [toggle, setToggle]);

    const { data, isLoading } = useQuery(["product-item-get"], () =>
        api
            .get(
                `https://oda-center.herokuapp.com/api/application-settings?team_id=63139b667182ce79d673f933`
            )
            .then((res) => {
                const regionData = res?.data;
                const filterData = regionData.filter((e: any) => {
                    e.type === "product";
                });
                return filterData;
            })
            .catch((res) => {
                toast.error(res.message);
            })
    );
    // console.log(data);
    // .then((res)=>{
    //     const datas = res.data.data;
    //     const filterData = datas.rData.filter((a: any) => a._id === apId)
    // })
    useEffect(() => {
        const ProductData = data?.data;
        ProductData?.map((v: any) => setGetData(v.settingsItems));
    }, [data]);

    return (
        <>
            <Modals
                HTitle="Funnel Stage"
                closeModal={closeModal}
                modalIsOpen={modalIsOpen}
            />
            <div className="h-fit max-w-[770px] md:w-[770px] rounded-lg bg-White overflow-hidden">
                <div className="px-5 py-5 md:px-10">
                    <div className=" flex flex-row justify-between py-[10px]">
                        <span className="capitalize font-bold leading-[22px] text-base text-[#101010]">
                            Product
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
                            dataArr={getData}
                            itemsPerPage={5}
                            className=" !justify-start"
                        >
                            {(currentItems) => (
                                <>
                                    <div className=" flex flex-col gap-[16px]">
                                        {currentItems.map(
                                            ({ title, _id }: any) => (
                                                <ItemCard
                                                    name={title}
                                                    id={_id}
                                                    key={_id}
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

export default Product;
