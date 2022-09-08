/* eslint-disable @next/next/no-img-element */
import React, { useMemo } from "react";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import { useState } from "react";
import Link from "next/link";
import WishlistModal from "../../../components/Dashboard/WishlistPage/WishlistModal";
import { useWindowDimensions } from "../../../components/Shared/DimentionHook";
import { useQuery } from "react-query";
import api from "./../../../api/index";
import { getLocal } from "./../../../utils/localStorage";
import LodingAnimation from "./../../../components/Shared/LodingAnimation/index";
import { useEffect } from "react";
import { Router, useRouter } from "next/router";

// flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:[&>div]:basis-[calc(50%-10px)] lg:[&>div]:basis-[calc((100%/3)-(40px/3))]
function WishList() {
    const team = getLocal("team");

    const handleModal = () => {
        setModalOpen(!modalOpen);
        refetch();
    };
    const { isLoading, data, refetch } = useQuery("get wish", () =>
        api.get(`/api/wish?team_id=${team.id}`)
    );
    const [modalOpen, setModalOpen] = useState(false);

    const { width } = useWindowDimensions();
    function getItemsPerPage(): number {
        if (width < 680) {
            return 6;
        } else if (width < 768) {
            return 10;
        } else if (width < 1024) {
            return 4;
        } else if (width < 1440) {
            return 8;
        } else if (width < 1920) {
            return 12;
        } else {
            return 16;
        }
    }

    return (
        <DashboardLayout>
            <div className="">
                <div className="min-h-screen ">
                    <div className="flex items-center justify-between">
                        <div className="text-[24px] leading-[32.68px] text-[#000] font-semibold">
                            Wishlist
                        </div>
                        <button
                            onClick={handleModal}
                            className="bg-primary hover:bg-[#890F21] transition-all duration-200 p-[15px_18px] rounded-[4px] flex items-center justify-center"
                        >
                            <img
                                src="/assets/dashboard-wishlist/plus.svg"
                                alt=""
                                width={14}
                                height={14}
                            />
                            <span className="text-sm w-[146px] font-semibold leading-[19.07px] text-[#fff]">
                                Add new wishlist
                            </span>
                        </button>
                    </div>
                    <div className="pt-[30px]"></div>
                    {isLoading ? (
                        <div className="flex items-center justify-center w-[100%] h-screen ">
                            <LodingAnimation
                                color="#E51937"
                                height={50}
                                width={50}
                            />
                        </div>
                    ) : (
                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 ">
                            <WishListItem wishes={data} />
                        </div>
                    )}
                </div>
            </div>
            <WishlistModal
                modalOpen={modalOpen}
                handleModal={handleModal}
                type={"create"}
                refetch={refetch}
            />
        </DashboardLayout>
    );
}

type CardProps = {
    wishes: any;
};
function WishListItem({ wishes }: CardProps) {
    const router = useRouter();
    return (
        <>
            {wishes?.data.map((wish: any, index: any) => (
                <div key={index}>
                    <div className="flex items-center gap-[10px] text-white p-[10px_15px] bg-[#000]">
                        <img
                            src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                            alt="profile image"
                            width={38}
                            height={38}
                            className="rounded-full"
                        />
                        <div className="text-lg leading-[24.51px] font-semibold">
                            {wish.user_name}
                        </div>
                    </div>
                    <div className="p-[15px]">
                        <div className="text-[#101010] table">
                            <div className="table-row">
                                <div className="table-cell text-xs leading-[16px] font-normal">
                                    Title
                                </div>
                                <div className="table-cell text-sm leading-[19px] font-semibold p-0 pl-4 w-[90%] truncate">
                                    {wish.wish_title}
                                </div>
                            </div>
                            <div className="pt-4"></div>
                            <div className="table-row">
                                <div className="table-cell text-xs leading-[16px] font-normal">
                                    Content Type
                                </div>
                                <div className="table-cell text-sm leading-[19px] font-semibold p-0 pl-4  w-[90%] truncate">
                                    {wish.content_type}
                                </div>
                            </div>
                            <div className="pt-4"></div>
                            <div className="table-row">
                                <div className="table-cell text-xs leading-[16px] font-normal">
                                    Status
                                </div>
                                <div className="table-cell text-sm leading-[19px] font-semibold p-0 pl-4 w-[90%] truncate">
                                    {wish.status}
                                </div>
                            </div>
                        </div>
                        <div className="pt-[40px]"></div>
                        <button
                            onClick={() =>
                                router.push(
                                    `/dashboard/wishlist/view/${wish._id}`
                                )
                            }
                            className="text-xs leading-[40px] text-primary hover:text-[#fff] font-semibold w-full border-primary border transition-all duration-200 hover:bg-primary rounded-[4px] h-[40px]"
                        >
                            Manage
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
}

export default WishList;
