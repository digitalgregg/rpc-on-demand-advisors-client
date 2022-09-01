/* eslint-disable @next/next/no-img-element */
import React from "react";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import { useState } from "react";
import Link from "next/link";
import WishlistModal from "../../../components/Dashboard/WishlistPage/WishlistModal";
// flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:[&>div]:basis-[calc(50%-10px)] lg:[&>div]:basis-[calc((100%/3)-(40px/3))]
function WishList() {
    const [modalOpen, setModalOpen] = useState(false);
    const handleModal = () => {
        setModalOpen(!modalOpen);
    };
    return (
        <DashboardLayout>
            <div className="">
                <div className=" min-h-screen">
                    <div className="flex justify-between items-center">
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
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 ">
                        <WishListItem />
                        <WishListItem />
                        <WishListItem />
                        <WishListItem />
                        <WishListItem />
                        <WishListItem />
                        <WishListItem />
                        <WishListItem />
                        <WishListItem />
                    </div>
                </div>
            </div>
            <WishlistModal
                modalOpen={modalOpen}
                handleModal={handleModal}
                type={"create"}
            />
        </DashboardLayout>
    );
}

function WishListItem() {
    return (
        <Link href="/dashboard/wishlist/view/dfsdfw">
            <div>
                <div className="flex items-center gap-[10px] text-white p-[10px_15px] bg-[#000]">
                    <img
                        src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                        alt="profile image"
                        width={38}
                        height={38}
                        className="rounded-full"
                    />
                    <div className="text-lg leading-[24.51px] font-semibold">
                        Gregg
                    </div>
                </div>
                <div className="p-[15px]">
                    <div className="text-[#101010] table">
                        <div className="table-row">
                            <div className="table-cell text-xs leading-[16px] font-normal">
                                Title
                            </div>
                            <div className="table-cell text-sm leading-[19px] font-semibold p-0 pl-4">
                                Graphics design
                            </div>
                        </div>
                        <div className="pt-4"></div>
                        <div className="table-row">
                            <div className="table-cell text-xs leading-[16px] font-normal">
                                Content Type
                            </div>
                            <div className="table-cell text-sm leading-[19px] font-semibold p-0 pl-4">
                                eBook
                            </div>
                        </div>
                        <div className="pt-4"></div>
                        <div className="table-row">
                            <div className="table-cell text-xs leading-[16px] font-normal">
                                Status
                            </div>
                            <div className="table-cell text-sm leading-[19px] font-semibold p-0 pl-4">
                                Close
                            </div>
                        </div>
                    </div>
                    {/* <table className="">
                        <tr>
                            <td className="text-xs leading-[16px] font-normal">
                                Title
                            </td>
                            <td className="text-sm leading-[19px] font-semibold p-0 pl-4">
                                Graphics design
                            </td>
                        </tr>
                        <div className="pt-4"></div>
                        <tr>
                            <td className="text-xs leading-[16px] font-normal">
                                Content Type
                            </td>
                            <td className="text-sm leading-[19px] font-semibold pl-4">
                                Ebook
                            </td>
                        </tr>
                        <div className="pt-4"></div>
                        <tr>
                            <td className="text-xs leading-[16px] font-normal">
                                Status
                            </td>
                            <td className="text-sm leading-[19px] font-semibold pl-4">
                                Close
                            </td>
                        </tr>
                    </table> */}
                    <div className="pt-[40px]"></div>
                    <button className="text-xs leading-[40px] text-primary hover:text-[#fff] font-semibold w-full border-primary border transition-all duration-200 hover:bg-primary rounded-[4px] h-[40px]">
                        Manage
                    </button>
                </div>
            </div>
        </Link>
    );
}

export default WishList;
