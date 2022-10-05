import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { updateTrackers } from "../../../api-call/TrackersApi";
import { team_state } from "../../../state";
import {
    TrackerCloseIcon,
    TrackerEditeIcon,
    TrackerSaveIcon,
    TrackerUploadIcon,
} from "../../CustomIcons";
import CodeEditor from "../../Shared/CodeEditor";
import LodingAnimation from "../../Shared/LodingAnimation";

type TE = {
    data: any;
    type: "header" | "footer";
    refetch: () => any;
};

function TrackersEditor({ data, type, refetch }: TE) {
    const [isEditable, setEditable] = useState(false);
    const [teamData] = useAtom(team_state);
    const handleEditable = () => {
        setEditable(!isEditable);
    };

    const [buttonLoading, setButtonLoading] = useState(false);

    const [editedCode, setEditedCode] = useState();
    const handleSubmit = async () => {
        if (!editedCode) return;
        setButtonLoading(true);
        const apiObj: any = {
            team_id: teamData.id,
        };
        if (type === "header") {
            apiObj.header_html = editedCode;
        }
        if (type === "footer") {
            apiObj.footer_html = editedCode;
        }
        try {
            await updateTrackers(apiObj);
            toast.success("Trackers updated successfully");
            setButtonLoading(false);

            refetch();
        } catch (error) {
            setButtonLoading(false);

            console.log(error);
        }
    };

    useEffect(() => {
        if (type === "footer") {
            if (data && data.footer_html) {
                setEditedCode(data.footer_html);
            }
        }
        if (type === "header") {
            if (data && data.header_html) {
                setEditedCode(data.header_html);
            }
        }
        return () => {};
    }, [data, type]);

    const resetFunction = () => {
        if (type === "footer") {
            if (data && data.footer_html) {
                setEditedCode(data.footer_html);
            }
        }
        if (type === "header") {
            if (data && data.header_html) {
                setEditedCode(data.header_html);
            }
        }
        setEditable(false);
    };

    return (
        <>
            <div className="">
                <div className="border w-full h-[192px]  border-[#9E9E9E] rounded-[4px] p-5 overflow-visible">
                    <CodeEditor
                        isEditable={isEditable}
                        defaultValue="<h1>Please input html code</h1>"
                        onChange={(v: any) => setEditedCode(v)}
                        value={editedCode}
                    />
                </div>
                {teamData.role === "admin" && (
                    <>
                        {isEditable === true ? (
                            <>
                                <div className=" flex flex-row justify-end gap-[15px] mt-[12px]">
                                    <div
                                        className="cursor-pointer "
                                        onClick={handleEditable}
                                    >
                                        <TrackerUploadIcon />
                                    </div>
                                    <div
                                        className="cursor-pointer "
                                        onClick={resetFunction}
                                    >
                                        <TrackerCloseIcon />
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className=" flex flex-row justify-end items-center gap-[15px] mt-[12px]">
                                    <div
                                        className="cursor-pointer "
                                        onClick={handleEditable}
                                    >
                                        <TrackerEditeIcon />
                                    </div>
                                    {buttonLoading ? (
                                        <div>
                                            <LodingAnimation
                                                width={20}
                                                height={20}
                                                color={"#E51937"}
                                            />
                                        </div>
                                    ) : (
                                        <div
                                            className="cursor-pointer "
                                            onClick={handleSubmit}
                                        >
                                            <TrackerSaveIcon />
                                        </div>
                                    )}
                                </div>
                            </>
                        )}
                    </>
                )}
            </div>
        </>
    );
}

export default TrackersEditor;
