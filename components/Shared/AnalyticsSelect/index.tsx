import { StylesConfig } from "react-select";
import Select from "react-select";

type NavSelectProps = {
    onChange?: (e: any) => void;
    label?: string;
    value?: any[];
    name?: string;
    options?: object[];
    defaultValue?: any;
};

const AnalyticsSelect = (props: NavSelectProps) => {
    const customStyles: StylesConfig = {
        control: (base: any, state: any) => ({
            ...base,
            border: "1px solid #E0E0E0",
            boxShadow: "none",
            minHeight: "55px",
            ":hover": {
                borderColor: "#E0E0E0",
            },
        }),
        input: (base) => ({ ...base, paddingLeft: 4 }),
        placeholder: (base) => ({ ...base, paddingLeft: 4, fontSize: 14 }),
        multiValue: (base) => ({
            ...base,
            background: "none",
            border: "1px solid #E0E0E0",
            borderRadius: "4px",
        }),
        multiValueRemove: (base) => ({
            ...base,
            "&>svg": {
                background: "#222",
                borderRadius: "50px",
                color: "white",
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
        menuList: (base) => ({
            ...base,
            maxHeight: 200,
        }),

        // indicatorsContainer: (provided: any) => ({
        //     ...provided,
        //     border: "none",
        // }),
        indicatorSeparator: () => ({ display: "none" }),
        clearIndicator: (base) => ({
            ...base,
            paddingRight: 0,
            cursor: "pointer",
        }),
    };
    return (
        <div>
            {props.label && (
                <div className=" mb-[10px]">
                    <label
                        className={
                            " text-[#000000] !text-sm !leading-[19.07px] font-semibold block"
                        }
                    >
                        {props.label}
                    </label>
                </div>
            )}
            <span className="relative">
                <Select
                    defaultValue={props.defaultValue}
                    onChange={props.onChange}
                    isMulti
                    placeholder={`Select ${props.label?.toLowerCase()}`}
                    name={props.name}
                    styles={customStyles}
                    options={props.options}
                    value={props.value}
                    className="basic-multi-select"
                    classNamePrefix="top-select"
                />
            </span>
        </div>
    );
};

export default AnalyticsSelect;
