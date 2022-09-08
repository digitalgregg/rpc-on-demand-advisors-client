/* eslint-disable @next/next/no-img-element */
import React from "react";

function ManagementTable() {
    const tableHeader =
        "sm:text-xs sm:leading-[16.34px] md:text-sm md:leading-[19.07px] xl:text-base xl:leading-[21.79px] text-white  font-semibold";

    return (
        <div className="pt-4">
            <div className="w-full h-[48px] hidden bg-[#000805] sm:flex rounded items-center px-5">
                <div className={`${tableHeader} w-[22%]`}>User Name</div>
                <div className={`${tableHeader} w-[28%]`}>Email</div>
                <div className={`${tableHeader} w-[20%]`}>User type</div>
                <div className={`${tableHeader} w-[20%]`}>Online Status</div>
                <div className={`${tableHeader} w-[10%]`}>Action</div>
            </div>
            <div>
                <TableItem />
            </div>
        </div>
    );
}

const tableItemData = {
    profile: "/assets/account-settings/profile-img.jpg",
    name: "Rashed",
    email: "rashediq6al@gmail.com",
    userType: "admin",
    onlineStatus: "offline",
};

function TableItem({ data }: any) {
    return (
        <>
            <div className="sm:flex px-5 hidden text-[12px] leading-[16.34px] md:text-sm md:leading-[19.07px] h-[59px] border-b xl:h-[65px] border-[#BDBDBD] items-center text-[#222] font-semibold">
                <div className={` w-[22%]`}>
                    <div className="flex items-center">
                        <img
                            src={data.profile}
                            alt="user-avatar"
                            className="w-[30px] h-[30px] rounded-full"
                        />
                        <h3 className="ml-[12px]">{data.name}</h3>
                    </div>
                </div>
                <div className={` w-[28%]`}>
                    <h3 className="truncate ">{data.email}</h3>
                </div>
                <div className={` w-[20%]`}>
                    <div>{data.userType}</div>
                </div>
                <div className={` w-[20%]`}>
                    <div>{data.onlineStatus}</div>
                </div>
                <div className={` w-[10%] flex`}>
                    <img
                        src="/icon/edit.svg"
                        alt="edit"
                        className="w-[16px] h-[19.6px] sm:mr-[22px] md:mr-[26px] cursor-pointer"
                    />
                    <img
                        src="/icon/delete.svg"
                        alt="delete"
                        className="w-[20px] h-[20px] cursor-pointer"
                    />
                </div>
            </div>
            <div className="sm:hidden rounded overflow-hidden">
                <div className="flex items-center gap-[10px] text-white p-[10px_15px] bg-[#000]">
                    <img
                        src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                        alt="profile image"
                        width={38}
                        height={38}
                        className="rounded-full"
                    />
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
                                {data.userType}
                            </div>
                        </div>
                        <div className="pt-4"></div>
                        <div className="table-row">
                            <div className="table-cell text-xs leading-[16px] font-normal">
                                Online Status
                            </div>
                            <div className="table-cell text-sm leading-[19px] font-semibold p-0 pl-6">
                                {data.onlineStatus}
                            </div>
                        </div>
                    </div>
                    <div className="pt-[40px]"></div>
                    <div className="flex gap-[9px]">
                        <button className="text-xs leading-[40px] bg-primary  font-semibold w-full border-primary border  transition-all duration-200  text-white rounded-[4px] h-[40px]">
                            Edit
                        </button>
                        <button className="text-xs leading-[40px] text-primary  font-semibold w-full border-primary border transition-all duration-200 rounded-[4px] h-[40px]">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

TableItem.defaultProps = {
    data: tableItemData,
};

export default ManagementTable;
