import React from "react";
import CodeEditor from "../../Shared/CodeEditor";
import {
    TrackerCloseIcon,
    TrackerUploadIcon,
    TrackerEditeIcon,
    TrackerSaveIcon,
} from "../../CustomIcons";
import { useState } from "react";

function TrackersEditor({ onSave }: { onSave?: (code?: string) => any }) {
    const [isEditable, setEditable] = useState(false);
    const [code, setCode] = useState<string>();


    const handleEditable = () => {
        setEditable(!isEditable);
    };
    const handleEditorChange = (v?: string) => {
        setCode(v);
    };
    return (
        <div>
            <div className="">
                <div className="border w-full h-[192px]  border-[#9E9E9E] rounded-[4px] p-5 overflow-visible">
                    <CodeEditor
                        isEditable={isEditable}
                        defaultValue="<h1>Please input html code</h1>"
                        onChange={handleEditorChange}
                        value={code}
                    />
                </div>
                {isEditable === true ? (
                    <>
                        <div className=" flex flex-row justify-end gap-[15px] mt-[12px]">
                            <div
                                className=" cursor-pointer"
                                onClick={handleEditable}
                            >
                                <TrackerUploadIcon
                                />
                            </div>
                            <div
                                className=" cursor-pointer"
                                onClick={handleEditable}
                            >
                                <TrackerCloseIcon
                                />
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className=" flex flex-row justify-end gap-[15px] mt-[12px]">
                            <div
                                className=" cursor-pointer"
                                onClick={handleEditable}
                            >
                                <TrackerEditeIcon
                                />
                            </div>
                            <div
                                className=" cursor-pointer"
                                onClick={() => onSave && onSave(code)}
                            >
                                <TrackerSaveIcon
                                />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default TrackersEditor;
