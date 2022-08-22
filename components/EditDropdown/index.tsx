import React,{useState} from "react";
import DeleteIcon from "../CustomIcons/DeleteIcon";
import DownloadIcon from "../CustomIcons/DownloadIcon";
import EditIcon from "../CustomIcons/EditIcon";
import TagIcon from "../CustomIcons/TagIcon";
import UpdateIcon from "../CustomIcons/UpdateIcon";

type DropdownProps = {
  mapIndex: number;
  clickedId: any;
  isOpen: boolean;
};

const item = [
    {
        id:0,
        title: "Tag",
        img: <TagIcon stroke="#222222" />
    },
    {
        id:1,
        title: "Edit",
        img: <EditIcon stroke="#222222" />
    },
    {
        id:2,
        title: "Download",
        img: <DownloadIcon stroke="#222222" />
    },
    {
        id:3,
        title: "Update",
        img: <UpdateIcon stroke="#222222" />
    },
    {
        id:4,
        title: "Delete",
        img: <DeleteIcon stroke="#222222" />
    },
]
const EditDropdown = ({ mapIndex, clickedId,isOpen }: DropdownProps) => {
    
  return (
    <>
      {(clickedId === mapIndex) && isOpen && (
        <div
          style={{ boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.25)" }}
          className="w-[156px] h-[210px] bg-[#FFFFFF] rounded-[4px]  px-[10px] flex flex-col justify-center"
        >
            {item.map((list:any) => (
                <div key={list.id} className="">
                <ul className="rounded-[4px] hover:bg-[#E51937]">
                <li className="flex gap-[12px] cursor-pointer py-2 group px-[10px] text-[16px] items-center  text-[#222222]">{list.img} <span className=" text-[16px] text-[#222222] group-hover:text-[#FFFFFF]">{list.title}</span> </li>
            </ul>
                </div>
            ))}
            
        </div>
      )}
    </>
  );
};

export default EditDropdown;
