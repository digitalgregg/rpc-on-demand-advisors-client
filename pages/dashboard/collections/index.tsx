import React, { useState } from "react";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import { useRouter } from "next/router";
import DeleteIcon from "./../../../components/CustomIcons/DeleteIcon";

function Collections() {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(false);
  const handleEditIconDropdown = (id: any) => {
    setSelectedId(id);
    setOpenDropdown(!openDropdown);
    console.log(id, "clicked id")
  };
  return (
    <DashboardLayout>
      <div className="w-full">
        {/* Filter section  */}
        <div className="flex items-center justify-between pb-[30px]">
          <h3 className="text-[16px] font-semibold text-[#222222]">
            Your Content
          </h3>
          <div className="flex items-center gap-[10px] ">
            <h3 className="text-[14px]">Sorted by</h3>
            <select
              placeholder="Sorted"
              className="w-[111px] h-[30px] bg-transparent rounded-[4px] border border-[#DEDEDE] px-[5px]"
            >
              <option>Newest</option>
              <option>Oldest</option>
              <option>Favorites</option>
              <option>Voted</option>
            </select>
          </div>
        </div>

        {/* Filter section  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-[30px] pb-[30px] sm:gap-[36px] xl:gap-[35px] ">
          {[...Array(20)].map((collectionId: any, index) => (
            <div
              key={collectionId}
              className="w-full  h-[121px] bg-[#FFFFFF] relative rounded-[4px]  shadow-[0px_2px_25px_rgba(0,0,0,0.06)] hover:shadow-[0px_2px_20px_rgba(229,25,55,0.2)] border border-transparent  transition ease-in-out duration-200 hover:border hover:border-primary px-[20px] py-[20px]"
            >
              <img
                onClick={() => handleEditIconDropdown(index)}
                src="/img/editIcon.svg"
                alt="edit"
                className="w-[24px] h-[24px] absolute top-[20px] right-[20px] cursor-pointer "
              />

              {index === selectedId && openDropdown && (
                <div className="absolute top-[44px]  right-[31px] w-[111px] h-[70px] z-50 shadow-[4px_4px_8px_rgba(0,0,0,0.25)] bg-white  flex items-center justify-center px-[10px]">
                  <ul className="w-full group ">
                    <li onClick={() => router.push(`/dashboard/collections/view-contents/${collectionId}`)} className="flex gap-[18px] items-center mb-[12px] text-[14px] px-2 py-[2px]  transition ease-in-out duration-200 hover:bg-[rgba(229,25,55,0.1)] cursor-pointer ">
                      <img src="/img/editIcon.svg" alt="edit" />{" "}
                      <span className="group-hover:text-primary text-[#222222] ">
                        {" "}
                        Edit
                      </span>{" "}
                    </li>

                    <li className="flex gap-[18px] items-center  transition ease-in-out duration-200 text-[14px] hover:bg-[rgba(229,25,55,0.1)] px-2  py-[2px] cursor-pointer">
                      <DeleteIcon stroke="#E51937" width="12px" height="12px" />{" "}
                      <span className="group-hover:text-primary text-[#222222]">
                        {" "}
                        Delete
                      </span>{" "}
                    </li>
                  </ul>
                </div>
              )}

              <h3 className="text-[16px] font-semibold text-[#222222] w-[269px] truncate ">
                Test Collection name
              </h3>
              <p className="text-[14px] font-normal text-[#222222] mt-[10px] mb-[10px]">
                Total content <span className="font-semibold ">(12)</span>{" "}
              </p>
              <p className="text-[#676767] text-[13px]">
                Last updated: 23m ago
              </p>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Collections;
