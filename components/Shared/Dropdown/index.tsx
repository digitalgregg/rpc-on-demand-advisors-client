/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, {
    useEffect,
    useRef,
    createContext,
    useContext,
    FormEventHandler,
} from "react";
import { useState, ReactNode, ReactElement } from "react";

type DropdownType = {
    className?: string;
    height: string | number;
    width: string | number;
    children?: ReactNode;
    placeholder?: string;
    placeholderClass?: string;
    onChange?: (value?: string) => void;
    noItemText?: string;
    defaultValue?: string;
    iconClass?: string;
};

const DropDownContext = createContext<any>(null);
const GetDropDownContext = () => useContext(DropDownContext);

function Dropdown({
    height,
    width,
    className,
    placeholder,
    children,
    noItemText,
    iconClass,
    defaultValue,
    placeholderClass,
    onChange,
}: DropdownType) {
    const [isOpen, setOpen] = useState(false);
    const [active, setActive] = useState<any>();

    const ref = useRef<any>();

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (
                ref &&
                ref.current &&
                ref.current.contains &&
                !ref.current.contains(event.target)
            ) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
    }, [ref]);

    useEffect(() => {
        onChange && onChange(active && active.value);
    }, [active]);

    const handleOpen = (e: any) => {
        setOpen(!isOpen);
    };

    return (
        <div className={"relative" + " " + className} ref={ref}>
            <div
                className={
                    "text-[black] flex items-center justify-between border border-[#676767] rounded-[4px] px-[15px] focus:outline-none [background:none] cursor-pointer" +
                    " " +
                    className
                }
                style={{ height, width }}
                onClick={handleOpen}
            >
                <div className={placeholderClass}>
                    {(active &&
                        (!active.children ? (
                            <GetChildren
                                value={defaultValue}
                                child={children}
                                setActive={setActive}
                            />
                        ) : (
                            active.children
                        ))) ||
                        placeholder}
                </div>
                <svg
                    width={14}
                    className={iconClass}
                    height={8}
                    viewBox="0 0 14 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1 1L7 7L13 1"
                        stroke="#676767"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            {isOpen && (
                <div className="bg-[#fff] !z-50  w-full absolute py-[10px] shadow-[0px_0px_20px_rgba(0,0,0,0.1)]">
                    <div
                        className=" w-full  px-[10px] max-h-[260px] overflow-y-auto select-scrollbar z-[1000] "
                        onClick={() => setOpen(true)}
                    >
                        <DropDownContext.Provider
                            value={{ setOpen, isOpen, setActive, active }}
                        >
                            {React.Children.count(children) > 0 ? (
                                children
                            ) : (
                                <div className="text-[#000] text-center text-sm">
                                    {noItemText || "Nothing here"}
                                </div>
                            )}
                        </DropDownContext.Provider>
                    </div>
                </div>
            )}
        </div>
    );
}

Dropdown.defaultProps = {
    height: "48px",
    width: "100%",
};

type DropdownItemType = {
    value: string;
    children?: ReactNode;
    className?: string;
    activeClass?: string;
};

export const DropdownItem = ({
    value,
    children,
    className,
    activeClass,
}: DropdownItemType) => {
    const { active, setActive, setOpen } = GetDropDownContext();
    const existValue = {
        value: value,
        children: children || value,
    };
    const handleItem = () => {
        setActive(existValue);
        setTimeout(() => {
            setOpen(false);
        }, 0.0000001);
    };

    return (
        <div
            className={`text-base leading-[21.79px] p-[9px_16px] text-[#101010]  cursor-pointer rounded-[4px] ${
                (active &&
                    existValue.value == active.value &&
                    "bg-[#E51937] font-semibold !text-[#fff]" +
                        " " +
                        activeClass) ||
                "hover:text-[rgb(229,25,55)] hover:bg-[rgb(229,25,55,.1)] hover:font-semibold"
            } ${className}`}
            onClick={handleItem}
        >
            {children || value}
        </div>
    );
};

const GetChildren = ({
    child,
    value,
    setActive,
}: {
    child: ReactNode;
    value?: string;
    setActive: (v: any) => void;
}) => {
    useEffect(() => {
        {
            React.Children.toArray(child).forEach(({ props }: any) => {
                if (props.value == value) {
                    setActive(props);
                }
            });
        }
    }, []);
    return <></>;
};

export { Dropdown };
