import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { AdornmentProps, InputProps, InputSizes } from "./Input.types";
import { tw_input } from "./tw_input";

export const fontSize = (size: InputSizes | any) => {
    const adornmentFontSize =
        size === "medium"
            ? "text-[20px]"
            : size === "large"
            ? "text-[20px]"
            : "text-[20px]";

    return adornmentFontSize;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (ownerState, ref) => {
        const {
            className,
            style,
            varient,
            size = "medium",
            rounded,
            label,
            enablePasswordShoHideButton,
            widthFull = true,
            type = "text",
            startAdornment,
            endAdornment,
            startAdornmentClass = "",
            endAdornmentClass = "",
            labelClass = "",
            ...props
        } = ownerState;

        const defaultRef = useRef<HTMLInputElement>(null!);
        const resolvedRef = ref || defaultRef;

        const inputClasses = tw_input({
            varient,
            size,
            rounded,
        });

        const input_font_size = fontSize(size);

        const [inputExtraStyle, setInputExtraStyle] =
            useState<React.CSSProperties>();
        const startAdornmentRef = useRef<HTMLDivElement>(null!);
        const endAdornmentRef = useRef<HTMLDivElement>(null!);

        useEffect(() => {
            setInputExtraStyle((prev) => ({
                ...prev,
                transition: "0s",
                paddingLeft: startAdornment
                    ? startAdornmentRef.current.clientWidth + 10
                    : undefined,
                paddingRight:
                    endAdornment ||
                    (type === "password" && enablePasswordShoHideButton)
                        ? endAdornmentRef.current.clientWidth + 10
                        : undefined,
            }));

            setTimeout(() => {
                setInputExtraStyle((prev) => ({
                    ...prev,
                    transition: undefined,
                }));
            }, 500);
        }, [
            startAdornment,
            endAdornment,
            startAdornmentClass,
            endAdornmentClass,
            size,
            enablePasswordShoHideButton,
        ]);

        return (
            <div className={`${widthFull ? "block w-full" : "inline-block"}`}>
                <label className="relative block w-full">
                    {/* Input Label --Start-- */}
                    {label && (
                        <span
                            className={`${input_font_size} ${labelClass} font-medium mb-2.5 inline-block select-none text-gray ${
                                props.disabled
                                    ? "opacity-50 pointer-events-none"
                                    : ""
                            }`}
                        >
                            {label}
                        </span>
                    )}
                    {/* Input Label --End-- */}

                    {/* Input Wrapper --Start-- */}
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

                        {/* Main Input --Start-- */}
                        <input
                            type={type}
                            style={{
                                transitionProperty: "border",
                                ...style,
                                ...inputExtraStyle,
                            }}
                            {...props}
                            className={`${inputClasses}  ${
                                widthFull ? "block w-full" : ""
                            } ${className}`}
                            ref={resolvedRef}
                        />
                        {/* Main Input --End-- */}

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

                        {/* Password Field Show Hide Toggle Button --Start-- */}
                        {type === "password" &&
                            !endAdornment &&
                            enablePasswordShoHideButton && (
                                <Adornment
                                    position="end"
                                    ref={endAdornmentRef}
                                    className="cursor-pointer !px-0"
                                >
                                    <PasswordFieldToggleButton
                                        inputRef={resolvedRef}
                                    />
                                </Adornment>
                            )}
                        {/* Password Field Show Hide Toggle Button --End-- */}
                    </div>
                    {/* Input Wrapper --End-- */}
                </label>
            </div>
        );
    }
);

const PasswordFieldToggleButton = ({ inputRef }: { inputRef: any }) => {
    const [inputType, setInputType] = useState<string>("password");
    useEffect(() => {
        setInputType(inputRef.current.type);
    }, []);

    const inputTypeHandler = (prev: string) => {
        if (prev === "password") {
            inputRef.current.type = "text";
            return "text";
        }
        inputRef.current.type = "password";
        return "password";
    };

    return (
        <button
            type="button"
            onClick={() => setInputType((prev) => inputTypeHandler(prev))}
            className="px-2.5 h-full flex items-center outline-none rounded"
        >
            {inputType === "password" ? (
                <BsEye size={25} />
            ) : (
                <BsEyeSlash size={25} />
            )}
        </button>
    );
};

const Adornment = React.forwardRef<HTMLDivElement, AdornmentProps>(
    (props, ref) => {
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
            <>
                <div
                    {...rest}
                    ref={ref}
                    className={classNames(
                        "absolute top-0 right-3 text-[#707070] h-full flex items-center justify-center aspect-square cursor-pointer",
                        position === "start"
                            ? `left-2 pl-2.5 rounded-l-md ${startAdornmentClass}`
                            : `right-2 pr-2.5 rounded-r-md ${endAdornmentClass}`,
                        className
                    )}
                >
                    {children}
                </div>
            </>
        );
    }
);
Adornment.displayName = "Adornment";

Input.displayName = "Input";
export default React.memo(Input);
