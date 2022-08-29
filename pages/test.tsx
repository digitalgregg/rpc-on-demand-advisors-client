import React, { useState, useRef, useEffect } from "react";
import { OutSideClick } from "../components/Shared/OutSideClick";
import FileShare from "../components/fileShare";
import { NormalIcon } from "../components/CustomIcons";

const data = [
    {
        id: 1,
        Icon: NormalIcon,
    },
    {
        id: 2,
        Icon: NormalIcon,
    },
    {
        id: 3,
        Icon: NormalIcon,
    },
    {
        id: 4,
        Icon: NormalIcon,
    },
];

const Test = () => {
    return (
        <div className="min-h-screen flex justify-center items-center w-full bg-white">
            <FileShare />
        </div>
    );
};
const Components = () => {
    return (
        <div className="w-[200px] h-[100px] bg-blue-100 absolute">
            <div>This is te</div>
        </div>
    );
};
export default Test;
