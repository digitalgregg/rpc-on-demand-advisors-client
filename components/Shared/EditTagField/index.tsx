import { StylesConfig } from "react-select";
import Select from "react-select";
import TagBadges from "../../CustomIcons/TagBadges";

type EditFieldProps = {
    handleOnChange?: (e: any) => void;
    placeholder?: string;
    value?: string;
    name?: string;
    options?: object[];
    defaultValue?: any;
};

const EditTagField = (props: EditFieldProps) => {
    const labelStyle = "flex items-center gap-[8px] text-[#000805]";

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

        option: (provided: any, state: any) => ({
            ...provided,
            fontSize: "14px",
            backgroundColor: state.isSelected ? "#E51937" : "transparent",
            fontWeight: state.isSelected ? 700 : 500,
            color: state.isSelected ? "#fff" : "#000",
            width: "98%",

            borderRadius: "4px",
            margin: "0 auto",
            ":hover": {
                background: state.isSelected
                    ? "#E51937"
                    : "rgba(229,25,55,0.1)",
                color: state.isSelected ? "#fff" : "#E51937",
            },
        }),

        // indicatorsContainer: (provided:any) => ({
        //     border: "none"
        //   }),
    };
    return (
        <>
            {/* <div className="mb-[10px] mt-[30px] text-#000805">
        <label className={label}>Tags</label>
      </div> */}
            <Select
                defaultValue={props.defaultValue}
                onChange={props.handleOnChange}
                isMulti
                placeholder={props.placeholder}
                name={props.name}
                styles={customStyles}
                options={props.options}
                className="basic-multi-select"
                classNamePrefix="select"
            />
        </>
    );
};

export default EditTagField;
