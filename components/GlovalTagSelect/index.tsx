import React from "react";
import Select from "react-select";
import TagBadges from "./../CustomIcons/TagBadges";

type TagProps = {
  mapData: Object[];
  customStyles: object;
  isLabel?: boolean;
  labelClass?: string;
  handleChange: any;
  placeholder?: string;
  name: string;
  labelContainer?: string;
};

const GlovalTagSelect = ({
  mapData,
  customStyles,
  isLabel,
  labelClass,
  handleChange,
  placeholder,
  name,
  labelContainer
}: TagProps) => {
  const labelStyle = "flex items-center gap-[8px]";

  const options = mapData.map((item: any, index) => ({
    value: `${index}`,
    label: (
      <div className={labelStyle}>
        <TagBadges color={item.tagColor} /> {item.label}
      </div>
    ),
  }));

  return (
    <div className="w-full ">
      {isLabel === true && (
        <div className={labelContainer}>
          <label className={labelClass}>Tags</label>
        </div>
      )}
      <Select
        // defaultValue={[colourOptions[2], colourOptions[3]]}
        components={{ DropdownIndicator : () => <div className="w-[155px] h-[31px] cursor-pointer text-[#9E9E9E] text-[14px] border rounded-[4px] border-[#9E9E9E] px-[10px] flex items-center justify-between">Tags <span><img src="/img/selectDropdown.svg" alt="" className="w-[12.94px] h-[4.86px]" /></span> </div> }}
        onChange={handleChange}
        isMulti
        placeholder={placeholder}
        name={name}
        styles={customStyles}
        options={options}
        className=""
        classNamePrefix="select"
      />
    </div>
  );
};

export default GlovalTagSelect;
