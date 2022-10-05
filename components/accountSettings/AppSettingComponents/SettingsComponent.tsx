import React from "react";
import { GetSettingsContext } from "../../Context/SettingsDataProvider";
import LodingAnimation from "../../Shared/LodingAnimation";
import { useState } from "react";
import {
    SettingResponse,
    SettingsItem as SettingItemType,
} from "../../../api-call/AppSettingsApi";
import { useEffect } from "react";
import CreateSetting, { getTextWithType } from "./CreateSetting";
import Pagination, { IsArray } from "../../Shared/Pagination";
import SettingItem from "./SettingItem";
import { AnimatePresence } from "framer-motion";
import AddStageBtn from "./AddStageBtn";
import { team_state } from "../../../state";
import { useAtom } from "jotai";

type SettingComponentType = {
    type: string;
};

function SettingsComponent({ type }: SettingComponentType) {
    const [teamData] = useAtom(team_state);
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<SettingItemType[] | null>();
    const { settingsData, status } = GetSettingsContext();

    const [modalOpen, setModalOpen] = useState("");

    const handleClose = (type?: string) => {
        setModalOpen(typeof type === "string" ? type : "");
    };

    useEffect(() => {
        if (status.isError) {
            setLoading(false);
            setData(null);
        }
        if (status.isSuccess) {
            const findData = settingsData.find((v) => v.type === type);
            if (!findData) {
                setLoading(false);
                setData(null);
            }
            if (findData?.settingsItems.length === 0) {
                setLoading(false);
                setData(null);
            }
            if (findData?.settingsItems && findData?.settingsItems.length > 0) {
                setLoading(false);

                const injectOrder = findData?.settingsItems.map((v, i) => ({
                    ...v,
                    order: i + 1,
                }));

                setData(injectOrder);
            }
        }
        return () => {};
    }, [settingsData, status, type]);

    return (
        <>
            {isLoading && (
                <span className="flex items-center gap-[10px] text-black">
                    <div>
                        <LodingAnimation color="black" />
                    </div>
                    <div>Loading data...</div>
                </span>
            )}
            {!isLoading && !data && (
                <>
                    <div className="text-black">
                        {getTextWithType(type)} not found...
                    </div>
                    {teamData.role === "admin" && (
                        <AddStageBtn onClick={() => handleClose(type)} />
                    )}
                </>
            )}
            {!isLoading && data && (
                <div>
                    <Pagination
                        className="!justify-start pt-4"
                        dataArr={IsArray(data)}
                        itemsPerPage={6}
                    >
                        {(currentItems) => (
                            <>
                                <div className="flex flex-col gap-4">
                                    {currentItems.map((v: any, i) => (
                                        <SettingItem
                                            key={i}
                                            data={v}
                                            type={type}
                                        />
                                    ))}
                                </div>
                                {teamData.role === "admin" && (
                                    <AddStageBtn
                                        onClick={() => handleClose(type)}
                                    />
                                )}
                            </>
                        )}
                    </Pagination>
                </div>
            )}
            <CreateSetting
                isOpen={modalOpen ? true : false}
                handleClose={handleClose}
                type={modalOpen}
            />
        </>
    );
}

export default SettingsComponent;
