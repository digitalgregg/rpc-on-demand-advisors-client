import React, { useState } from "react";
import { userManagementData } from "../../fake";
import UserManagementModel from "./../../modal/UserManagementModal/index";
import UserManagementInviteSendModal from "./../../modal/UserManagementInviteSendModal/index";
import { DeleteModals } from "./../../modal/UserManagementDeleteModal";
import Pagination from "../../Shared/Pagination";

const UserManagementTable = () => {
    const [openModal, setOpenModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [openInviteSendModal, setOpenInviteSendModal] = useState(false);
    const thStyle =
        "py-[13px] font-semibold sm:text-[12px] sm:leading-[16px] md:text-[14px] md:leading-[19px] xl:text-[16px] xl:leading-[22px]";
    const tdStyle =
        "font-semibold sm:text-[12px] sm:leading-[16px] md:text-[14px] md:leading-[19px] text-[#222222] sm:pt-[13px] sm:pb-[15px] md:pb-[16.5px] md:pt-[12.5px] xl:pb-[20.5px] xl:pt-[14.5px]";
    return (
        <>
            <UserManagementInviteSendModal
                isOpen={openInviteSendModal}
                onClose={() => setOpenInviteSendModal(false)}
            />
            <UserManagementModel
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
            />
            <DeleteModals
                modalIsOpen={openDeleteModal}
                closeModal={() => setOpenDeleteModal(false)}
            />
            <div className="w-full bg-[#FFFFFF] sm:px-[10px] md:px-[20px] 2xl:px-[30px] py-[30px] hidden sm:flex sm:flex-col">
                <div className="flex items-center mb-[10px]">
                    <h3 className="flex-1 font-semibold text-[18px] leading-[25px] text-[#101010]">
                        User Management
                    </h3>
                    <button
                        onClick={() => setOpenInviteSendModal(true)}
                        className="hover-transition hover:bg-primary hover:text-White w-[132px] sm:h-[39px] md:h-[42px] border border-primary rounded-[4px] font-normal sm:text-[14px] sm:leading-[19px] md:text-[16px] md:leading-[22px] text-primary"
                    >
                        Send Invite
                    </button>
                </div>
                <table className="w-[100%] text-left">
                    <thead className=" text-[#FFFFFF] bg-[#000805]">
                        <tr>
                            <th
                                className={`${thStyle} sm:pl-[9.98px] md:pl-[10.38px] lg:pl-[12.25px] xl:pl-[16.08px] 2xl:pl-[18.19px] 4xl:pl-[19px]`}
                            >
                                User Name
                            </th>
                            <th className={thStyle}>Email</th>
                            <th className={thStyle}>User type</th>
                            <th className={thStyle}>User Status</th>
                            <th className={`${thStyle} flex justify-center`}>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-[#FFFFFF]">
                        <Pagination
                            dataArr={userManagementData}
                            itemsPerPage={4}
                            className=" !justify-start my-3"
                        >
                            {(currentItems) => (
                                <>
                                    {currentItems.map(
                                        ({
                                            id,
                                            img,
                                            name,
                                            email,
                                            userType,
                                            onlineStatus,
                                        }: any) => {
                                            return (
                                                <tr
                                                    key={id}
                                                    className="border-b border-[#BDBDBD]"
                                                >
                                                    <td
                                                        className={`${tdStyle} xl:pl-[20px] sm:pl-[10px]`}
                                                    >
                                                        <div className="flex items-center">
                                                            <img
                                                                src={img}
                                                                alt="user-avatar"
                                                                className="w-[30px] h-[30px]"
                                                            />
                                                            <h3 className="ml-[12px]">
                                                                {name}
                                                            </h3>
                                                        </div>
                                                    </td>
                                                    <td className={tdStyle}>
                                                        <h3 className="truncate w-[170px]">
                                                            {email}
                                                        </h3>
                                                    </td>
                                                    <td className={tdStyle}>
                                                        {userType}
                                                    </td>
                                                    <td className="font-normal">
                                                        {onlineStatus}
                                                    </td>
                                                    <td className="sm:pt-[13px] sm:pb-[15px] md:pb-[16.5px] md:pt-[12.5px] xl:pb-[20.5px] xl:pt-[14.5px]">
                                                        <div className="flex w-[100%] justify-center">
                                                            <img
                                                                src="/icon/edit.svg"
                                                                alt="edit"
                                                                className="w-[16px] h-[19.6px] sm:mr-[22px] md:mr-[26px] cursor-pointer"
                                                                onClick={() =>
                                                                    setOpenModal(
                                                                        true
                                                                    )
                                                                }
                                                            />
                                                            <img
                                                                src="/icon/delete.svg"
                                                                alt="delete"
                                                                className="w-[20px] h-[20px] cursor-pointer"
                                                                onClick={() => {
                                                                    setOpenDeleteModal(
                                                                        true
                                                                    );
                                                                }}
                                                            />
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        }
                                    )}
                                </>
                            )}
                        </Pagination>
                    </tbody>
                </table>
            </div>
        </>
    );
};
export default UserManagementTable;
