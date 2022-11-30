import { AnimatePresence, motion } from "framer-motion";
import { useAtom } from "jotai";
import React, { useState } from "react";
import { SettingResponse, SettingsItem } from "../../api-call/AppSettingsApi";
import { AppSettingToggle, FilterOrigin } from "../../state";

function SidebarFilter({ data }: { data: SettingResponse[] }) {
    const [appSetting] = useAtom(AppSettingToggle);

    return (
        <div className="h-full hidden lg:block shadow-sm filter-section-wrapper w-[220px] bg-white pt-[30px]">
            <div className=" pl-[39px]">
                <div className="text-xl font-bold uppercase">Filters</div>
                <div className="pt-[10px]"></div>
                <div className="border-b border-[#DADADA]"></div>
            </div>
            <div className="h-[calc(100%-39px)] sidebar-scrollbar overflow-y-auto">
                <div className="pt-[30px]"></div>
                <SideFilterLayout
                    items={getItemsByType(data, "funnel")}
                    label="Funnel Stages"
                    active={"funnel_stages"}
                />

                <SideFilterLayout
                    items={getItemsByType(data, "content")}
                    label="Content Type"
                    active={"content_type"}
                />

                {appSetting.product && (
                    <SideFilterLayout
                        items={getItemsByType(data, "product")}
                        label="Product"
                        active={"product"}
                    />
                )}

                {appSetting.industry && (
                    <SideFilterLayout
                        items={getItemsByType(data, "industry")}
                        label="Industry"
                        active={"industry"}
                    />
                )}

                {appSetting.region && (
                    <SideFilterLayout
                        items={getItemsByType(data, "region")}
                        label="Region"
                        active={"region"}
                    />
                )}

                {appSetting.tag && (
                    <SideFilterLayout
                        items={getItemsByType(data, "tags")}
                        label="Tags"
                        active={"tags"}
                    />
                )}
            </div>
        </div>
    );
}

const SideFilterLayout = ({
    label,
    items,
    active,
}: {
    label: string;
    items: SettingsItem[];
    active:
        | "content_type"
        | "tags"
        | "industry"
        | "product"
        | "funnel_stages"
        | "region";
}) => {
    const [isOpen, setOpen] = useState(true);
    const [filterOrigin, setFilterOrigin] = useAtom(FilterOrigin);
    const activeFilter = filterOrigin[active];

    const handleCheckbox = (v: SettingsItem) => {
        const isChecked = activeFilter.some((val) => val.value === v._id);
        if (isChecked) {
            const changedFilter = activeFilter.filter(
                (newVal) => newVal.value !== v._id
            );
            setFilterOrigin({ ...filterOrigin, [active]: changedFilter });
        } else {
            const obj = v.color
                ? { data: { title: v.title, color: v.color }, value: v._id }
                : { value: v._id, label: v.title };
            const changedFilter = activeFilter.concat([obj]);
            setFilterOrigin({ ...filterOrigin, [active]: changedFilter });
        }
    };

    return (
        <div className="">
            <div
                onClick={() => setOpen(!isOpen)}
                className={` ${
                    !isOpen && "bg-[#D9D9D933]"
                } flex pl-[30px] transition-all duration-300  py-[10px] items-center justify-between pr-4 cursor-pointer`}
            >
                <div className="font-semibold ">{label}</div>
                <img
                    className={` transition-all duration-300 ${
                        !isOpen && "-rotate-90"
                    }`}
                    src="/downArrow.svg"
                    alt=""
                />
            </div>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        className="overflow-hidden pl-[30px] "
                        initial={{ height: 0 }}
                        animate={{ height: "fit-content" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="pt-2"></div>
                        <div className="flex flex-col gap-4">
                            {items.length ? (
                                items.map((v, i) => (
                                    <label
                                        key={i}
                                        htmlFor={v._id}
                                        className="flex items-center gap-2"
                                    >
                                        <input
                                            type="checkbox"
                                            name=""
                                            id={v._id}
                                            onChange={(e) => {}}
                                            onClick={() => handleCheckbox(v)}
                                            checked={activeFilter.some(
                                                (val) => val.value === v._id
                                            )}
                                            className="w-4 h-4"
                                        />
                                        {v.color && (
                                            <div
                                                className="h-4 rounded-full w-4"
                                                style={{
                                                    backgroundColor: v.color,
                                                }}
                                            ></div>
                                        )}
                                        <div>{v.title}</div>
                                    </label>
                                ))
                            ) : (
                                <div className="text-neutral-400">
                                    No options found
                                </div>
                            )}
                        </div>
                        <div className="pt-10"></div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const getItemsByType = (
    data: SettingResponse[],
    type: string
): SettingsItem[] | [] => {
    const findData = data.find((v) => v.type === type);
    return findData ? findData.settingsItems : [];
};

export default SidebarFilter;
