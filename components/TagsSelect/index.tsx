import React from "react";
import Select from "react-select";
import TagBadges from "./../CustomIcons/TagBadges";

const TagsSelect = () => {
  const labelStyle = "flex items-center gap-[8px]";
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

  const customStyles = {
    control: (base: any, state: any) => ({
      ...base,
      border: "1px solid #9E9E9E",
      boxShadow: "none",
    }),
    // indicatorsContainer: (provided:any) => ({
    //     border: "none"
    //   }),
  };
  return (
    <>
      <div className="mb-[10px] mt-[30px] text-#000805">
        <label className={label}>Tags</label>
      </div>
      <Select
        // defaultValue={[colourOptions[2], colourOptions[3]]}
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

export default TagsSelect;
