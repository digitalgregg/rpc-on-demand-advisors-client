import React from "react";
import { userManagementData } from "../fake";

const UserManagementTable = () => {
  const thStyle =
    "py-[13px] font-semibold sm:text-[12px] sm:leading-[16px] md:text-[14px] md:leading-[19px] xl:text-[16px] xl:leading-[22px]";
  const tdStyle =
    "font-semibold sm:text-[12px] sm:leading-[16px] md:text-[14px] md:leading-[19px] text-[#222222] sm:pt-[13px] sm:pb-[15px] md:pb-[16.5px] md:pt-[12.5px] xl:pb-[20.5px] xl:pt-[14.5px]";
  return (
    <div className="w-full bg-[#FFFFFF] sm:px-[10px] md:px-[20px] 2xl:px-[30px] py-[30px] hidden sm:flex sm:flex-col">
      <div className="flex items-center mb-[10px]">
        <h3 className="flex-1 font-semibold text-[18px] leading-[25px] text-[#101010]">
          User Management
        </h3>
        <button className="w-[132px] sm:h-[39px] md:h-[42px] border border-[#E51937] rounded-[4px] font-normal sm:text-[14px] sm:leading-[19px] md:text-[16px] md:leading-[22px] text-[#E51937]">
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
            <th className={`${thStyle} flex justify-center`}>Action</th>
          </tr>
        </thead>
        <tbody className="bg-[#FFFFFF]">
          {userManagementData.map((user) => {
            return (
              <tr key={user.id} className="border-b border-[#BDBDBD]">
                <td className={`${tdStyle} xl:pl-[20px] sm:pl-[10px]`}>
                  <div className="flex items-center">
                    <img
                      src={user.img}
                      alt="user-avatar"
                      className="w-[30px] h-[30px]"
                    />
                    <h3 className="ml-[12px]">{user.name}</h3>
                  </div>
                </td>
                <td className={tdStyle}>
                  <h3 className="truncate w-[170px]">{user.email}</h3>
                </td>
                <td className={tdStyle}>{user.userType}</td>
                <td className="font-normal">
                  {user.onlineStatus}
                </td>
                <td className="sm:pt-[13px] sm:pb-[15px] md:pb-[16.5px] md:pt-[12.5px] xl:pb-[20.5px] xl:pt-[14.5px]">
                  <div className="flex w-[100%] justify-center">
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
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default UserManagementTable;
