import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import {
    TrackerCloseIcon,
    TrackerEditeIcon,
    TrackerSaveIcon,
    TrackerUploadIcon,
} from "../../CustomIcons";
const Header = () => {
    const [code, setCode] = useState(`<!DOCTYPE html>
    <html>
    <head>
    <title>Page Title</title>
    </head>
    <body>
    <h1>This is a Heading</h1>
    
    </body>
    </html>`);
    const [edite, setEdite] = useState(false);
    const handlerEdite = () => {
        setEdite(true);
    };
    const handlerClose = () => {
        setEdite(false);
    };
    return (
        <div className=" flex flex-col gap-4">
            <h3 className=" capitalize text-2xl leading-[33px] font-semibold text-black">
                header
            </h3>
            <p className=" text-base leading-[22px] font-normal text-[#676767]">
                Add HTML and JavaScript snippets to the header of published
                collection site pages
            </p>
            <div className=" flex flex-col">
                {edite === true ? (
                    <>
                        <div className="border border-solid border-[#9E9E9E] rounded h-[192px] p-[10px] !overflow-hidden">
                            {/* editor */}
                        </div>
                        <div className=" flex flex-row justify-end gap-[15px] mt-[12px]">
                            <div className=" cursor-pointer">
                                <TrackerUploadIcon />
                            </div>
                            <div className=" cursor-pointer" onClick={handlerClose}>
                                <TrackerCloseIcon />
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="border border-solid border-[#9E9E9E] rounded h-[192px] m-0 !overflow-hidden">
                            <pre className=" p-5 h-full">
                                <code className=" text-sm leading-[19px] text-[#676767] font-normal">
                                    {code}
                                </code>
                            </pre>
                        </div>
                        <div className=" flex flex-row justify-end gap-[15px] mt-[12px]">
                            <div className=" cursor-pointer" onClick={handlerEdite}>
                                <TrackerEditeIcon />
                            </div>
                            <div className=" cursor-pointer">
                                <TrackerSaveIcon />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Header;
