import React, { useState, useRef } from "react";
import { OutSideClick } from "../components/Shared/OutSideClick";

import { NormalIcon } from "../components/CustomIcons";

import {CustomIconHover} from "../components/Shared/CustomIconHover"


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
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
        setOpen(!open);
    };
    

    return (
        <div className="min-h-screen flex justify-center items-center w-full bg-white">
            <div className="relative">
                <OutSideClick onOutSideClick={() => setOpen(false)}>
                    <button
                        onClick={handleOpen}
                        className="p-[10px_40px] text-white bg-blue-500 border-blue-500 hover:bg-transparent hover:text-blue-500 font-semibold border transition-all duration-100"
                    >
                        Click Me
                    </button>
                    {data.map(({ id, Icon }: any) => (
                        <div
                            key={id}
                          
                            className=" w-[100px] m-4 h-[50px] rounded-md hover:bg-purple-700 bg-pink-600"
                        >
                            <CustomIconHover totalIcon={id} Icons={Icon} activeColor="#fff" changeColor="#000" />
                        </div>
                    ))}

                    {open && <Components />}
                </OutSideClick>
            </div>
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
