import classNames from "classnames";
import { fontSize } from "../Input";
import { SelectProps } from "./Select.types";
import { tw_input } from "../Input/tw_input";
import Image from "next/image";

function index({
    children,
    className,
    varient,
    rounded,
    size,
    label,
    labelClass,
    style,
    ...props
}: SelectProps) {
    // const inputStyle = tw_input({
    //     varient,
    //     size,
    //     rounded,
    // });
    // const input_font_size = fontSize(size);

    return (
        <>
            <label>
                {label && (
                    <span
                        className={` ${labelClass} font-medium block mb-2.5 outline-none text-gray ${
                            props.disabled
                                ? "opacity-50 pointer-events-none"
                                : ""
                        }`}
                    >
                        {label}
                    </span>
                )}
                <div className="relative">
                    <select
                        {...props}
                        className={classNames(
                            " w-full h-[55px] overflow-hidden outline-none px-[15px] text-[#101010] text-base",
                            className
                        )}
                        style={{ border: "1px solid #8F9198", ...style }}
                    >
                        {children}
                    </select>
                    <div className="flex items-center justify-center absolute top-[2px] right-[1px] h-[94%] w-10 pr-[10px] bg-White">
                        <div className="max-w-[12px]">
                            <Image width={14} height={8} src="/downArrow.svg" alt="" />
                        </div>
                    </div>
                </div>
            </label>
        </>
    );
}

export default index;
