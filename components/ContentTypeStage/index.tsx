import React, { useState } from "react";
import Select from "react-select";

const options = [
    { value: "Demo text1", label: "Demo text1" },
    { value: "Demo text2", label: "Demo text2" },
    { value: "Demo text3", label: "Demo text3" },
    { value: "Demo text4", label: "Demo text4" },
];

const ContentTypeStage = () => {
    const [funnelStage, sestFunnelStage] = useState();
    const customStyles = {
        control: (base: any, state: any) => ({
            ...base,
            border: "1px solid #9E9E9E",
            boxShadow: "none",
        }),
        option: (provided: any, state: any) => ({
            ...provided,
            color: state.isSelected ? "#fff" : "#000000",
            fontSize: "14px",
            fontWeight: state.isSelected ? 700 : 400,
            width: "95%",
            borderRadius: "4px",
            margin: "0 auto",
            "&:hover": {
                color: state.isSelected ? "#fff" : "#E51937",
                fontWeight: state.isSelected ? 700 : 600,
            },
        }),
        indicatorsContainer: (provided: any) => ({
            border: "none",
        }),
    };

    const handleChange = (e: any) => {
        // sestFunnelStage(e);
    };
    const label = "text-[16px] font-semibold text-[#000805]";
    return (
        <div className="text-[#676767] w-full mt-[30px]">
            <div className="mb-[10px]">
                <label className={label}>Content Type Stages</label>
            </div>
            <Select
                value={funnelStage}
                onChange={handleChange}
                placeholder="Select Content Stages"
                options={options}
                className="text-[#0E100F] text-[14px] w-full"
                name="content type"
                styles={customStyles}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 4,
                    colors: {
                        ...theme.colors,
                        primary25: "#E519371A",
                        primary: "#E51937",
                    },
                })}
            />
        </div>
    );
};

export default ContentTypeStage;
