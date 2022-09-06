import React, { useEffect, useState } from "react";
import CodeEditor from "../../Shared/CodeEditor";
import {
    TrackerCloseIcon,
    TrackerUploadIcon,
    TrackerEditeIcon,
    TrackerSaveIcon,
} from "../../CustomIcons";

import api from "../../../api";
import { useAtom } from "jotai";
import { TrackersStateHeaderAtom } from "../../../state/index";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { getLocal } from "../../../utils/localStorage";

function HeaderTrackersEditor() {
    const [isEditable, setEditable] = useState(false);
    const [codeTrackersState, setCodeTrackersState] = useAtom(
        TrackersStateHeaderAtom
    );
    const [apiTrackersId, setApiTrackersId] = useState<string>("");
    const [team_idBoolean, setTeam_idBoolean] = useState<boolean>(false);
    const teamId = getLocal("team");
    const handleEditable = () => {
        setEditable(!isEditable);
    };
    const handleEditorChange = (v?: string) => {
        setCodeTrackersState(v);
    };

    const handlePut = () => {
        api.put(
            `https://oda-center.herokuapp.com/api/trackers/${apiTrackersId}`,
            {
                header_html: codeTrackersState,
            }
        )
            .then((res) => {
                toast.success(res.data.message);
            })
            .catch((err) => {
                toast.error(err.message);
            });
    };
    const handlePush = () => {
        api.post(`https://oda-center.herokuapp.com/api/trackers`, {
            team_id: teamId.id,
            header_html: codeTrackersState,
        })
            .then((res) => {
                toast.success(res.data.message);
            })
            .catch((err) => {
                toast.error(err.message);
            });
    };
    useEffect(() => {
        api.get(`https://oda-center.herokuapp.com/api/trackers/${teamId.id}`)
            .then((res) => {
                if (res?.data?.team_id === teamId.id) {
                    setTeam_idBoolean(true);
                }
                setApiTrackersId(res?.data?._id);
                setCodeTrackersState(res?.data?.header_html);
                return;
            })
            .catch((res) => {
                toast.error(res.message);
            });
    }, []);

    return (
        <>
            <div className="">
                <div className="border w-full h-[192px]  border-[#9E9E9E] rounded-[4px] p-5 overflow-visible">
                    <CodeEditor
                        isEditable={isEditable}
                        defaultValue="<h1>Please input html code</h1>"
                        onChange={handleEditorChange}
                        value={codeTrackersState}
                    />
                </div>
                {isEditable === true ? (
                    <>
                        <div className=" flex flex-row justify-end gap-[15px] mt-[12px]">
                            <div
                                className=" cursor-pointer"
                                onClick={handleEditable}
                            >
                                <TrackerUploadIcon />
                            </div>
                            <div
                                className=" cursor-pointer"
                                onClick={handleEditable}
                            >
                                <TrackerCloseIcon />
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
                                <TrackerEditeIcon />
                            </div>
                            <div
                                className=" cursor-pointer"
                                onClick={() => {
                                    team_idBoolean === true
                                        ? handlePut()
                                        : handlePush();
                                }}
                            >
                                <TrackerSaveIcon />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default HeaderTrackersEditor;
