import React, { useEffect, useRef, useState } from "react";
import { fontSize } from "../Input";
import { AdornmentProps, TextareaProps } from "./Textarea.types";

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>((ownerState, ref) => {
    const {
        className,
        style,
        varient,
        size,
        rounded,
        startAdornment = "",
        startAdornmentClass = "",
        endAdornment,
        endAdornmentClass,
        label,
        labelClass = "",
        floatingLabel,
        floatingLabelClass = "",
        placeholder,
        ...props
    } = ownerState;

    const defaultRef = useRef<HTMLTextAreaElement>(null!);
    const resolvedRef = ref || defaultRef;


    const input_font_size = fontSize(size);

    const [inputExtraStyle, setTextareaExtraStyle] = useState<React.CSSProperties>();
    const startAdornmentRef = useRef<HTMLDivElement>(null!);
    const endAdornmentRef = useRef<HTMLDivElement>(null!);

    useEffect(() => {
        setTextareaExtraStyle((prev) => ({
            ...prev,
            transition: "0s",
            paddingLeft: startAdornment ? startAdornmentRef.current.clientWidth + 10 : undefined,
            paddingRight: endAdornment ? endAdornmentRef.current.clientWidth + 10 : undefined,
        }));

        setTimeout(() => {
            setTextareaExtraStyle((prev) => ({
                ...prev,
                transition: undefined,
            }));
        }, 500);
    }, [startAdornment, endAdornment, size]);

    return (
        <div className="inline-block w-full">
            <label className="relative block w-full">
                {/* Textarea Label --Start-- */}
                {label && (
                    <span
                        className={` ${labelClass} text-gray font-semibold mb-1 inline-block select-none ${
                            props.disabled ? "opacity-50 pointer-events-none" : ""
                        }`}
                    >
                        {label}
                    </span>
                )}
                {/* Textarea Label --End-- */}

                {/* Textarea Wrapper --Start-- */}
                <div className="relative inline-block w-full">
                    {/* Start Adornment --Start-- */}
                    <Adornment
                        fontSize={input_font_size}
                        startAdornmentClass={startAdornmentClass}
                        position="start"
                        ref={startAdornmentRef}
                    >
                        {startAdornment}
                    </Adornment>
                    {/* Start Adornment --End-- */}

                    {/* Main Textarea --Start-- */}
                    <textarea
                        style={{
                            ...style,
                            ...inputExtraStyle,
                        }}
                        {...props}
                        className={` ${className} ${
                            floatingLabel ? "placeholder:!text-transparent select-none" : ""
                        } w-full h-[200px] p-5 rounded text-[#9E9E9E] outline-none border-[1px] border-solid border-[#9E9E9E] `}
                        placeholder={floatingLabel ? "floatingLabel" : placeholder}
                        ref={resolvedRef}
                    ></textarea>
                    {/* Main Textarea --End-- */}

                    {/* Floating Label Start --Start-- */}
                    {floatingLabel && placeholder && (
                        <span
                            style={{
                                left: inputExtraStyle?.paddingLeft,
                                transition: inputExtraStyle?.transition,
                            }}
                            className={`
                            w-max
                            before:absolute
                            before:top-1/2
                            before:-translate-y-[calc(100%-1px)]
                            before:left-0
                            before:z-[-1]
                            before:h-[3px]
                            before:w-[calc(100%+10px)]
                            pl-1.5
                            before:bg-white
                            dark:before:bg-slate-800
                            dark:peer-focus:before:bg-slate-800
                            peer-focus:pl-1.5
                            peer-focus:before:bg-white
                            select-none
                            absolute
                            pointer-events-none 
                            origin-left 
                            scale-[0.85] 
                            text-slate-500 
                            dark:text-slate-200
                            -translate-y-1/2 
                            transition-all duration-200 
                            dark:peer-focus:text-slate-200
                            peer-focus:-translate-y-1/2
                            peer-focus:!text-primary-500
                            peer-focus:scale-[0.85] 
                            peer-placeholder-shown:pl-0
                            peer-placeholder-shown:translate-y-[calc(50%-2px)] 
                            peer-placeholder-shown:scale-100 
                            peer-placeholder-shown:bg-transparent 
                            peer-placeholder-shown:px-0 
                            peer-placeholder-shown:!text-slate-400 
                            font-medium 
                            ${
                                size === "extra_small"
                                    ? "text-[11px] left-2"
                                    : size === "small"
                                    ? "py-1.5 text-[12px] left-[10px]"
                                    : size === "large"
                                    ? "text-base left-4"
                                    : "text-[14px] left-3"
                            }
                            ${floatingLabelClass}`}
                        >
                            {placeholder}
                        </span>
                    )}

                    {/* bg-white
                            dark:bg-slate-800
                            peer-focus:bg-white
                            dark:peer-focus:!bg-slate-800 */}
                    {/* Floating Label Start --End-- */}

                    {/* End Adornment --Start-- */}
                    <Adornment
                        fontSize={input_font_size}
                        endAdornmentClass={endAdornmentClass}
                        position="end"
                        ref={endAdornmentRef}
                    >
                        {endAdornment}
                    </Adornment>
                    {/* End Adornment --End-- */}
                </div>
                {/* Textarea Wrapper --End-- */}
            </label>
        </div>
    );
});

Textarea.displayName = "Textarea";

const Adornment = React.forwardRef<HTMLDivElement, AdornmentProps>((props, ref) => {
    const {
        children,
        position,
        className = "",
        fontSize,
        startAdornmentClass,
        endAdornmentClass,
        ...rest
    } = props;
    if (!children) return null;

    return (
        <div
            ref={ref}
            className={` text-[14px] leading-[19px] font-normal text-gray ${
                     position === "start"
                         ? `left-[1px] pl-2.5 rounded-l-md ${startAdornmentClass}`
                         : `right-[1px] pr-2.5 rounded-r-md ${endAdornmentClass}`
                 } ${fontSize} ${className}`}
            {...rest}
        >
            {children}
        </div>
    );
});

Adornment.displayName = "Adornment";

export default React.memo(Textarea);
