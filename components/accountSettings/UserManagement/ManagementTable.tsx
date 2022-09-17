/* eslint-disable @next/next/no-img-element */
import React from "react";
import Avatar from "react-avatar";
import YesNoModal from "../../modal/YesNoModal";
import LodingAnimation from "../../Shared/LodingAnimation";
import Pagination, { IsArray } from "../../Shared/Pagination";
import { useState } from "react";
import {
    UserManageType,
    GetUserManageContext,
} from "../../Context/UserManageProvider";
import { deleteInvitedUser } from "../../../api-call/UserManageApi";
import UserManageModal from "../../modal/UserManagementModal";

type TablePropsType = {
    userData: UserManageType[];
    isSuccess: boolean;
    isLoading: boolean;
    refetch: () => any;
};

function ManagementTable({
    userData,
    isLoading,
    isSuccess,
    refetch,
}: TablePropsType) {
    const tableHeader =
        "sm:text-xs sm:leading-[16.34px] md:text-sm md:leading-[19.07px] xl:text-base xl:leading-[21.79px] text-white  font-semibold";

    return (
        <div className="pt-4">
            <div className="w-full h-[48px] hidden bg-[#000805] sm:flex rounded items-center px-5">
                <div className={`${tableHeader} w-[22%]`}>User Name</div>
                <div className={`${tableHeader} w-[28%]`}>Email</div>
                <div className={`${tableHeader} w-[20%]`}>User type</div>
                <div className={`${tableHeader} w-[20%]`}>Status</div>
                <div
                    className={`${tableHeader} w-[10%] text-center xl:text-right xl:pr-3`}
                >
                    Action
                </div>
            </div>
            <div>
                {isLoading ? (
                    <div className="h-[59px] text-[12px] leading-[16.34px] md:text-sm md:leading-[19.07px]  xl:h-[65px]  text-[#222] flex items-center px-5">
                        <div className="flex items-center gap-[10px]">
                            <LodingAnimation /> <span>Loading...</span>
                        </div>
                    </div>
                ) : userData && userData.length > 0 ? (
                    <Pagination
                        className="pt-1 sm:pt-[20px]"
                        dataArr={IsArray(userData)}
                    >
                        {(currentData) =>
                            currentData.map((data: any, i: number) => (
                                <TableItem data={data} key={i} />
                            ))
                        }
                    </Pagination>
                ) : (
                    <div className="h-[59px] text-[12px] leading-[16.34px] md:text-sm md:leading-[19.07px]  xl:h-[65px]  text-[#222] flex items-center px-5">
                        <div className="flex items-center gap-[10px]">
                            No data found
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

function TableItem({ data }: { data: UserManageType }) {
    const [deleteModal, setDeleteModal] = useState<boolean>(false);
    const { refetch } = GetUserManageContext();

    const [editModal, setEditModal] = useState<boolean>(false);

    const handleUserDelete = async (_: any, setLoading: any) => {
        setLoading(true);
        await deleteInvitedUser(data);
        setLoading(false);
        refetch();
        setDeleteModal(false);
    };

    return (
        <>
            <div className="sm:flex px-5 hidden text-[12px] leading-[16.34px] md:text-sm md:leading-[19.07px] h-[59px] border-b xl:h-[65px] border-[#BDBDBD] items-center text-[#222] font-semibold">
                <div className={` w-[22%]`}>
                    <div className="flex items-center">
                        {data.profile ? (
                            <img
                                src={data.profile}
                                alt="user-avatar"
                                className="w-[30px] h-[30px] rounded-full"
                            />
                        ) : (
                            <Avatar
                                name={data.name}
                                maxInitials={1}
                                size="30px"
                                round={true}
                                className="[&>*]:!text-sm"
                            />
                        )}

                        <h3 className="ml-[12px]">{data.name}</h3>
                    </div>
                </div>
                <div className={` w-[28%]`}>
                    <h3 className="truncate ">{data.email}</h3>
                </div>
                <div className={` w-[20%]`}>
                    <div>{data.role}</div>
                </div>
                <div className={` w-[20%]`}>
                    <div>{data.status}</div>
                </div>
                <div className={` w-[10%] flex justify-end`}>
                    <img
                        src="/icon/edit.svg"
                        alt="edit"
                        onClick={() => setEditModal(!editModal)}
                        className="w-[16px] h-[19.6px] sm:mr-[22px] md:mr-[26px] cursor-pointer"
                    />
                    <img
                        src="/icon/delete.svg"
                        alt="delete"
                        onClick={() => setDeleteModal(!deleteModal)}
                        className="w-[20px] h-[20px] cursor-pointer"
                    />
                </div>
            </div>
            <div className="sm:hidden rounded overflow-hidden mb-4">
                <div className="flex items-center gap-[10px] text-white p-[10px_15px] bg-[#000]">
                    {data.profile ? (
                        <img
                            src={data.profile}
                            alt="user-avatar"
                            className="w-[38px] h-[38px] rounded-full"
                        />
                    ) : (
                        <Avatar
                            round={true}
                            name={data.name}
                            maxInitials={1}
                            size="38px"
                            className="[&>*]:!text-base"
                        />
                    )}

                    <div className="text-lg leading-[24.51px] font-semibold">
                        {data.name}
                    </div>
                </div>
                <div className="p-[15px] bg-white">
                    <div className="text-[#101010] table">
                        <div className="table-row">
                            <div className="table-cell text-xs leading-[16px] font-normal">
                                Email
                            </div>
                            <div className="table-cell text-sm leading-[19px] font-semibold p-0 pl-6">
                                {data.email}
                            </div>
                        </div>
                        <div className="pt-4"></div>
                        <div className="table-row">
                            <div className="table-cell text-xs leading-[16px] font-normal">
                                User Type
                            </div>
                            <div className="table-cell text-sm leading-[19px] font-semibold p-0 pl-6">
                                {data.role}
                            </div>
                        </div>
                        <div className="pt-4"></div>
                        <div className="table-row">
                            <div className="table-cell text-xs leading-[16px] font-normal">
                                Active Status
                            </div>
                            <div className="table-cell text-sm leading-[19px] font-semibold p-0 pl-6">
                                {data.status}
                            </div>
                        </div>
                    </div>
                    <div className="pt-[40px]"></div>
                    <div className="flex gap-[9px]">
                        <button
                            onClick={() => setDeleteModal(!deleteModal)}
                            className="text-xs leading-[40px] bg-primary  font-semibold w-full border-primary border  transition-all duration-200  text-white rounded-[4px] h-[40px]"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => setDeleteModal(!deleteModal)}
                            className="text-xs leading-[40px] text-primary  font-semibold w-full border-primary border transition-all duration-200 rounded-[4px] h-[40px]"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            <YesNoModal
                header="Delete Invited User"
                description={`Are you sure you want to delete ${data.name}? This action cannot be undone`}
                isOpen={deleteModal}
                onYesClick={handleUserDelete}
                handleModal={() => setDeleteModal(!deleteModal)}
            />
            <UserManageModal
                isOpen={editModal}
                onClose={() => setEditModal(!editModal)}
                type={"update"}
                prevData={data}
            />
        </>
    );
}

export default ManagementTable;
