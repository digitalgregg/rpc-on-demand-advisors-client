import React, { useState, useEffect } from "react";
import Select from "react-select";
import TagBadges from "../../CustomIcons/TagBadges";

type TagSelectProps = {
    mapData: Object[];
    customStyles: object;
    onChangeFuction: (e: any) => void;
    name?: string;
    placeholder?: string;
    selectclass?: string;
    isLabel?: boolean;
    labelClass?: string;
    label?: string;
    labelContainer?: string;
    typeFilter?: string;
};

const TagsSelect = ({
    mapData,
    customStyles,
    name,
    placeholder,
    selectclass,
    onChangeFuction,
    isLabel,
    labelClass,
    label,
    labelContainer,
    typeFilter,
}: TagSelectProps) => {
    const [datas, setDatas] = useState<any>([]);
    const labelStyle = "flex items-center gap-[8px]";
    // const label = "text-[16px] font-semibold text-[#000805]";
    useEffect(() => {
        const filerData = mapData.filter((e: any) => e.type === typeFilter)[0];
        setDatas(filerData);
    }, [mapData]);

    const options = datas?.settingsItems?.map((item: any, index: any) => ({
        value: `${index}`,
        label: (
            <div className={labelStyle}>
                <TagBadges color={item.color} /> {item.title}
            </div>
        ),
    }));

    return (
        <>
            {isLabel === true && (
                <div className={labelContainer}>
                    <label className={labelClass}>{label}</label>
                </div>
            )}
            <Select
                // defaultValue={[colourOptions[2], colourOptions[3]]}
                onChange={onChangeFuction}
                isMulti
                placeholder={placeholder}
                name={name}
                styles={customStyles}
                options={options}
                className={selectclass}
                classNamePrefix="select"
            />
        </>
    );
};

export default TagsSelect;
