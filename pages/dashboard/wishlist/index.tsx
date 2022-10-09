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
import DataNotFound from "./../../../components/Shared/DataNotFound/index";
import { useAtom } from "jotai";
import { profile_state } from "../../../state";
import classNames from "classnames";
import UpgratePlan from "../../../components/UpgratePlan";

// flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:[&>div]:basis-[calc(50%-10px)] lg:[&>div]:basis-[calc((100%/3)-(40px/3))]
function WishList() {
    const team = getLocal("team");
    const router = useRouter();
    const { _id } = getLocal("user-info");
    const { isLoading: billLoading, data: billingInfo } = useQuery(
        ["check-plan", _id],
        () => api.get(`http://localhost:8080/api/billing-record/${_id}`),
        { enabled: !!_id }
    );

    const handleModal = () => {
        if (
            billingInfo?.data?.length !== 0 &&
            currentPlan?.plan_name !== "Lite"
        ) {
            setModalOpen(!modalOpen);
            refetch();
        }
    };
    const { isLoading, data, refetch } = useQuery("get wish", () =>
        api.get(`http://localhost:8080/api/wish?team_id=${team.id}`)
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
    if (!data) {
        console.log("data length");
    }

    const currentPlan = billingInfo?.data[0];
    console.log(currentPlan?.length, "currentPlan.......");

    return (
        <DashboardLayout>
            <div className="relative ">
                <div className="min-h-screen ">
                    <div className="flex items-center justify-between">
                        <div className="text-[24px] leading-[32.68px] text-[#000] font-semibold">
                            Wishlist
                        </div>
                        <button
                            type="button"
                            onClick={handleModal}
                            className={classNames(
                                currentPlan?.plan_name === "Lite" ||
                                    billingInfo?.data?.length === 0
                                    ? "cursor-not-allowed  bg-primary hover:bg-[#890F21] transition-all duration-200 p-[15px_18px] rounded-[4px] flex items-center justify-center"
                                    : " bg-primary hover:bg-[#890F21] transition-all duration-200 p-[15px_18px] rounded-[4px] flex items-center justify-center"
                            )}
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
                        <div>
                            <div className="flex items-baseline justify-center w-full relative top-[calc((100vh-350px)/2)]">
                                <LodingAnimation
                                    color="#E51937"
                                    height={50}
                                    width={50}
                                />
                                {/* <div className="text-black">No data found</div> */}
                            </div>
                        </div>
                    ) : (
                        <>
                            <div
                                className={classNames(
                                    billingInfo?.data?.length !== 0 &&
                                        currentPlan?.plan_name !== "Lite"
                                        ? "grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 "
                                        : "flex items-center justify-center w-full "
                                )}
                            >
                                <WishListItem
                                    wishes={data}
                                    billingInfo={billingInfo}
                                    currentPlan={currentPlan}
                                />
                            </div>
                            <div className="w-[100%] h-full place-items-center text-center">
                                {!data &&
                                    billingInfo?.data?.length !== 0 &&
                                    currentPlan?.plan_name !== "Lite" && (
                                        <DataNotFound />
                                    )}
                            </div>
                        </>
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
    billingInfo: any;
    currentPlan: any;
};
function WishListItem({ wishes, billingInfo, currentPlan }: CardProps) {
    const [profileData] = useAtom(profile_state);
    const router = useRouter();

    return (
        <>
            {billingInfo?.data?.length !== 0 &&
                currentPlan?.plan_name !== "Lite" &&
                wishes?.data.map((wish: any, index: any) => (
                    <div key={index} className="">
                        <div className="flex items-center gap-[10px] text-white p-[10px_15px] bg-[#000]">
                            {profileData?.location ? (
                                <img
                                    src={profileData?.location}
                                    alt="profile image"
                                    width={38}
                                    height={38}
                                    className="rounded-full"
                                />
                            ) : (
                                <img
                                    src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                                    alt="profile image"
                                    width={38}
                                    height={38}
                                    className="rounded-full"
                                />
                            )}
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
            {(billingInfo?.data?.length === 0 ||
                currentPlan?.plan_name === "Lite") && (
                <UpgratePlan topic="Wishlist" />
            )}
        </>
    );
}

export default WishList;
