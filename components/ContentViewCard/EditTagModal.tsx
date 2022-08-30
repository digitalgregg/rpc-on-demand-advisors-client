import React from "react";
import OverflowModal from "../Shared/CustomUtils/OverflowModal";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

function EditTagModal({ isOpen, onClose }: ModalProps) {
    return (
        <div className="">
            <OverflowModal
                className="bg-white w-[calc(100vw-40px)] max-w-[510px] h-[250px] px-[30px]  py-[40px]"
                isOpen={isOpen}
                onRequestClose={onClose}
            >
                <div className="">
                    <h3 className="text-[16px] font-semibold text-[#000]	mb-[10px]">
                        Update tag
                    </h3>
                    <div className="w-full mb-[40px]">
                        <EditTagField />
                    </div>
                    {/* buttons section  */}
                    <div className="flex justify-between gap-[10px] w-full mx-auto">
                        <button
                            onClick={onClose}
                            className="w-full h-[45px] rounded-[4px] text-[16px] text-primary border border-primary hover:bg-primary hover:text-[#FFFFFF] transition-all duration-150"
                        >
                            Cancel
                        </button>
                        <button className="w-full h-[45px] rounded-[4px] text-[16px]  border border-primary bg-primary hover:bg-[#890F21] text-[#FFFFFF] transition-all duration-150">
                            Update
                        </button>
                    </div>
                </div>
            </OverflowModal>
        </div>
    );
}

import Select, { StylesConfig } from "react-select";
import TagBadges from "../CustomIcons/TagBadges";

const EditTagField = () => {
    const labelStyle = "flex items-center gap-[8px] text-[#000805]";
    const label = "text-[16px] font-semibold text-[#000805]";
    const options = [
        {
            value: "Demo text1",
            label: (
                <div className={labelStyle}>
                    <TagBadges color="green" /> Demo text1
                </div>
            ),
        },
        {
            value: "Demo text2",
            label: (
                <div className={labelStyle}>
                    <TagBadges color="red" /> Demo text2
                </div>
            ),
        },
        {
            value: "Demo text3",
            label: (
                <div className={labelStyle}>
                    <TagBadges color="purple" /> Demo text3
                </div>
            ),
        },
        {
            value: "Demo text4",
            label: (
                <div className={labelStyle}>
                    <TagBadges color="dodgerblue" /> Demo text4
                </div>
            ),
        },
    ];

    const customStyles: StylesConfig = {
        control: (base: any, state: any) => ({
            ...base,
            border: "1px solid #9E9E9E",
            boxShadow: "none",
            minHeight: "55px",
            ":hover": {
                borderColor: "#9E9E9E",
            },
        }),
        multiValue: (base) => ({
            ...base,
            background: "none",
            border: "1px solid #9E9E9E",
            borderRadius: "4px",
        }),
        multiValueRemove: (base) => ({
            ...base,
            "&>svg": {
                background: "#222",
                borderRadius: "50px",
            },
            ":hover": {
                transform: "scale(1.1)",
                transition: "all",
                transitionDuration: ".2s",
            },
        }),

        // indicatorsContainer: (provided:any) => ({
        //     border: "none"
        //   }),
    };
    const handleChange = (e: any) => {
        console.log(e, "event name");
    };
    return (
        <>
            {/* <div className="mb-[10px] mt-[30px] text-#000805">
        <label className={label}>Tags</label>
      </div> */}
            <Select
                // defaultValue={[colourOptions[2], colourOptions[3]]}
                onChange={handleChange}
                isMulti
                placeholder="Select Tags"
                name="tags"
                styles={customStyles}
                options={options}
                className="basic-multi-select"
                classNamePrefix="select"
            />
        </>
    );
};

export default EditTagModal;
